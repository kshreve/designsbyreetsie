# Netlify Forms

The contact form on this site uses [Netlify Forms](https://docs.netlify.com/forms/setup/), which is a free form handling service provided by Netlify.

## How It Works

### In Production (Netlify)
1. Netlify's build bot detects the hidden form in `index.html`
2. Netlify creates form handling infrastructure
3. When users submit the form, data goes to Netlify
4. You can view submissions in the Netlify dashboard under "Forms"

### In Local Development
- **Forms will NOT work locally** - this is expected
- When you submit the form locally, you'll see a JavaScript alert
- The alert confirms the form would work in production
- This is standard behavior for Netlify forms

## Implementation Details

### Hidden Form (index.html)
The hidden form in `index.html` is required for Netlify's build bot to detect forms during deployment:

```html
<form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="fname" />
  <input type="text" name="lname" />
  <input type="email" name="emailAddress" />
  <input type="text" name="phone" />
  <input type="text" name="message" />
</form>
```

### React Component (EmailForm.jsx)
The actual form component includes:
- `name="contact"` - matches the hidden form
- `data-netlify="true"` - tells Netlify to handle this form
- `data-netlify-honeypot="bot-field"` - spam protection
- Hidden `form-name` input - required for SPAs
- Local development handler - shows alert instead of submitting

## Viewing Form Submissions

1. Log in to [Netlify](https://app.netlify.com)
2. Select your site (designsbyreetsie)
3. Go to "Forms" in the left sidebar
4. View submissions, export data, or set up notifications

## Form Notifications

You can configure email notifications for form submissions:

1. In Netlify dashboard → Forms → Form notifications
2. Add email notification
3. Enter recipient email address
4. Save settings

## Spam Protection

The form includes:
- **Honeypot field** (`bot-field`) - hidden field to catch bots
- **reCAPTCHA** (optional) - can be added via Netlify settings
- **Submission rate limiting** - built into Netlify

## Testing in Production

To test the form:
1. Deploy to Netlify
2. Visit the /contact page on your live site
3. Fill out and submit the form
4. Check Netlify dashboard → Forms for the submission

## Troubleshooting

### Form submissions not appearing in Netlify dashboard
- Check that the hidden form in `index.html` matches the React form fields
- Verify `name` attribute matches in both forms
- Ensure site is deployed (not just previewed)

### Form redirects to generic success page
- This is normal behavior
- You can customize by adding `action="/success"` to the form
- Or handle with JavaScript to show inline success message

### Getting 404 on form submission
- Make sure `<input type="hidden" name="form-name" value="contact" />` is included
- This is required for SPA (Single Page Application) forms on Netlify

## Alternative: Custom Backend

If you need forms to work locally or want more control, you could:
1. Use a service like [Formspree](https://formspree.io/)
2. Build a custom Express endpoint in `server.js`
3. Use Firebase, Supabase, or another backend service

But for this simple contact form, Netlify Forms is the easiest solution.
