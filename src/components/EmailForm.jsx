import { useState } from 'react';

export const EmailForm = () => {
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    // In local development, show mock success
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: '⚠️ Netlify forms only work in production. This form will work correctly when deployed to Netlify.'
      });
      return;
    }

    // In production, submit via AJAX to Netlify
    const formData = {
      'form-name': 'contact',
      fname: e.target.fname.value,
      lname: e.target.lname.value,
      emailAddress: e.target.emailAddress.value,
      phone: e.target.phone.value || '(not provided)',
      message: e.target.message.value || '(not provided)'
    };

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(formData)
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your form submission has been received. We\'ll get back to you soon.'
        });
        e.target.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error submitting your form. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      name="contact" 
      className="w-full" 
      method="POST" 
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      {/* Hidden field for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot field for Netlify spam protection */}
      <input type="hidden" name="bot-field" />
      
      <div className="space-y-3">
        <div className="mb-3">
          <label htmlFor="fname" className="block mb-1.5 text-sm">
            <em className="relative -left-0.5 text-base text-red-600 not-italic inline-block mr-0.5" aria-label="required">*</em>First Name:
          </label>
          <input 
            type="text" 
            id="fname"
            name="fname" 
            required 
            placeholder="Enter your first name"
            className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-1 focus:ring-[#993300] focus:border-[#993300]" 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="lname" className="block mb-1.5 text-sm">
            <em className="relative -left-0.5 text-base text-red-600 not-italic inline-block mr-0.5" aria-label="required">*</em>Last Name:
          </label>
          <input 
            type="text" 
            id="lname"
            name="lname" 
            required 
            placeholder="Enter your last name"
            className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-1 focus:ring-[#993300] focus:border-[#993300]" 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailAddress" className="block mb-1.5 text-sm">
            <em className="relative -left-0.5 text-base text-red-600 not-italic inline-block mr-0.5" aria-label="required">*</em>Email:
          </label>
          <input 
            type="email" 
            id="emailAddress"
            name="emailAddress" 
            required 
            placeholder="Enter your email address"
            className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-1 focus:ring-[#993300] focus:border-[#993300]" 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="block mb-1.5 text-sm">
            Best Phone Number to Reach You (Please include area code):
          </label>
          <input 
            type="tel" 
            id="phone"
            name="phone" 
            placeholder="(555) 123-4567"
            className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-1 focus:ring-[#993300] focus:border-[#993300]" 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="block mb-1.5 text-sm">
            Are you interested in purchasing a gourd, commissioned artwork, or have a general
            inquiry?
          </label>
          <textarea 
            id="message"
            name="message" 
            rows="5"
            placeholder="Please describe your inquiry..."
            className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded bg-white text-black focus:outline-none focus:ring-1 focus:ring-[#993300] focus:border-[#993300] resize-y" 
          />
        </div>

        <div className="mb-3">
          <button 
            className="px-4 py-2 text-sm bg-[#993300] text-white rounded hover:bg-[#790000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit!'}
          </button>
        </div>

        {status.message && (
          <div className={`mb-3 p-3 rounded text-sm ${
            status.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {status.message}
          </div>
        )}
      </div>
    </form>
  );
};
