export const EmailForm = () => {
  const handleSubmit = (e) => {
    // In local development, prevent form submission and show message
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      e.preventDefault();
      const formData = {
        firstName: e.target.fname.value,
        lastName: e.target.lname.value,
        email: e.target.emailAddress.value,
        phone: e.target.phone.value || '(not provided)',
        message: e.target.message.value || '(not provided)'
      };
      
      alert('⚠️ Netlify forms only work in production.\n\nWhen deployed to Netlify, this form will work correctly.\n\nForm data (for testing):\n' + 
        `- Name: ${formData.firstName} ${formData.lastName}\n` +
        `- Email: ${formData.email}\n` +
        `- Phone: ${formData.phone}\n` +
        `- Message: ${formData.message}`);
      return false;
    }
    // In production, let Netlify handle it normally
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
          <button className="px-4 py-2 text-sm bg-[#993300] text-white rounded hover:bg-[#790000] transition-colors" type="submit">Submit!</button>
        </div>
      </div>
    </form>
  );
};
