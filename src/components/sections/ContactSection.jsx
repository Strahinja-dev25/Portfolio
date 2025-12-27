import { useState } from 'react';
import { validateForm } from '../../utils/formValidator.js';
import { sendEmail } from '../../utils/emailService.js';

function ContactSection () {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formMessage, setFormMessage] = useState('');

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };
    
    const handleFormSubmit = (e) => {
        e.preventDefault();

        const validationError = validateForm(formData);
        if (validationError) {
            setFormMessage(validationError);
            return;
        }
        
        setFormMessage('Sending...');

        // === PRAVO SLANJE EMAIL-A === Glavni deo za rad sa email-om
        sendEmail(formData)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setFormMessage('Thank you! Your message has been sent.');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch((err) => {
            console.log('FAILED...', err);
            setFormMessage('Oops! Something went wrong. Please try again.');
        });
    };

    return (
        <section id="contact" className="contact-section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleFormChange} />
              <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleFormChange} />
            </div>
            <textarea placeholder="Your Message" rows="6" name="message" value={formData.message} onChange={handleFormChange}></textarea>
            
            {/* Prikazivanje poruke korisniku */}
            {formMessage && <p className="form-status-message">{formMessage}</p>}

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>
    );
}

export default ContactSection;
