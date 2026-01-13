import React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  subject,
  message,
}) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f9fafb' }}>
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ color: '#1f2937', marginBottom: '20px' }}>New Contact Form Submission</h1>
        
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#374151', fontSize: '16px', marginBottom: '8px' }}>Contact Information:</h2>
          <p style={{ color: '#6b7280', margin: '4px 0' }}><strong>Name:</strong> {name}</p>
          <p style={{ color: '#6b7280', margin: '4px 0' }}><strong>Email:</strong> {email}</p>
          <p style={{ color: '#6b7280', margin: '4px 0' }}><strong>Subject:</strong> {subject}</p>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#374151', fontSize: '16px', marginBottom: '8px' }}>Message:</h2>
          <div style={{ backgroundColor: '#f3f4f6', padding: '15px', borderRadius: '6px', color: '#1f2937', whiteSpace: 'pre-wrap' }}>
            {message}
          </div>
        </div>
        
        <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #e5e7eb' }}>
          <p style={{ color: '#9ca3af', fontSize: '12px', margin: '0' }}>
            This email was sent from the contact form on drewsepeczi.xyz
          </p>
          <p style={{ color: '#9ca3af', fontSize: '12px', margin: '4px 0 0 0' }}>
            Sent at: {new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};
