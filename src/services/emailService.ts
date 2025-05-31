
import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'service_4gqpho9';
const TEMPLATE_ID = 'template_8jv5rma';
const PUBLIC_KEY = 'WvbZ_p-5Xxvi0L7ZQ';

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<any> => {
  try {
    console.log('Sending email with data:', formData);
    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Anurag Gupta',
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};
