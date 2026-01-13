"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { SendHorizonal, LoaderCircle } from "lucide-react";

import { useState } from "react";

// Simplified form schema
const FormSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .transform((email) => email.toLowerCase()),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(500, "Message must be less than 500 characters"),
});

export function EmailForm() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    try {
      // wait for half a second to show loading animation
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          name: "Anonymous User",
          subject: "Contact Form Message"
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      toast({
        variant: "success",
        title: "Message sent successfully!",
        description: (
          <>
            <p className="font-semibold text-lg">
              Thanks for reaching out!
            </p>
            <p className="text-sm text-muted-foreground">
              We&apos;ll get back to you at {data.email} soon.
            </p>
          </>
        ),
      });
      form.reset(); // Reset form on successful submission
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        variant: "destructive",
        title: "Failed to send message",
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-neutral-500 text-sm h-10"
                  placeholder="your@email.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="border-neutral-500 text-sm min-h-[80px] resize-none"
                  placeholder="Your message..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="default"
          className="w-full h-10 text-sm font-medium"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Sending...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              Send Message
              <SendHorizonal className="h-4 w-4" />
            </div>
          )}
        </Button>
      </form>
    </Form>
  );
}
