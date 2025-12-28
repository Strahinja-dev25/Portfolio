import emailjs from '@emailjs/browser';

const SERVICE_ID = "gmail_service"; // Nađite ga u EmailJS -> Email Services
const TEMPLATE_ID = "template_fx0ks1t"; // Nađite ga u EmailJS -> Email Templates
const PUBLIC_KEY = "Oik1OI3gdMRqETVjm"; // Nađite ga u EmailJS -> Account -> API Keys

export const sendEmail = (formData) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
};
