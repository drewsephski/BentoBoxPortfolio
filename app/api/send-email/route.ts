import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

// Initialize Resend with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

// Define validation schema for the email request
const EmailSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required').max(200, 'Subject too long'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message too long'),
});

export async function POST(request: Request) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const validatedData = EmailSchema.parse(body);

    const { name, email, subject, message } = validatedData;

    // Create the email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h1 style="color: #1f2937; margin-bottom: 20px;">New Contact Form Submission</h1>
          
          <div style="margin-bottom: 20px;">
            <h2 style="color: #374151; font-size: 16px; margin-bottom: 8px;">Contact Information:</h2>
            <p style="color: #6b7280; margin: 4px 0;"><strong>Name:</strong> ${name}</p>
            <p style="color: #6b7280; margin: 4px 0;"><strong>Email:</strong> ${email}</p>
            <p style="color: #6b7280; margin: 4px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h2 style="color: #374151; font-size: 16px; margin-bottom: 8px;">Message:</h2>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 6px; color: #1f2937; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
              This email was sent from the contact form on drewsepeczi.xyz
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 4px 0 0 0;">
              Sent at: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    `;

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Resend's default sender for development
      to: ['drewsepeczi@gmail.com'], // Your verified Resend email for testing
      replyTo: email, // Allow replying directly to the sender
      subject: `Contact Form: ${subject}`,
      html: emailContent,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully!',
        data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending error:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
