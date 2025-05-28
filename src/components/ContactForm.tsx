
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, ContactFormData } from "@/services/emailService";

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail(formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white">Send a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name *" 
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
            <Input 
              name="email"
              type="email" 
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email *" 
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              required
            />
          </div>
          <Input 
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject" 
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
          />
          <Textarea 
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message *" 
            rows={4}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            required
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
