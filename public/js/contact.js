/**
 * Contact Form Module
 * Handles form validation, feedback, and fallback to direct email / mailto
 */

const contactConfig = {
  // Service configuration (Optional Web3Forms / Formspree endpoint)
  // Set endpointUrl to your Web3Forms access key or Formspree URL when available:
  endpointUrl: "", 
  recipientEmail: "ankitraj29234@gmail.com"
};

function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusEl = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = form.elements['name']?.value.trim() || '';
    const email = form.elements['email']?.value.trim() || '';
    const message = form.elements['message']?.value.trim() || '';

    if (!name || !email || !message) {
      showStatus('Please fill in all fields before sending.', 'error');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : 'Send Message';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending...';
    }

    // If an external endpoint is configured (Web3Forms/Formspree)
    if (contactConfig.endpointUrl && contactConfig.endpointUrl.startsWith('http')) {
      try {
        const response = await fetch(contactConfig.endpointUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
          showStatus('Thank you! Your message has been sent successfully.', 'success');
          form.reset();
        } else {
          fallbackMailto(name, email, message);
        }
      } catch (err) {
        fallbackMailto(name, email, message);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }
    } else {
      // Direct mailto fallback for static hosting
      setTimeout(() => {
        fallbackMailto(name, email, message);
        showStatus('Opening your email client to complete transmission...', 'success');
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 400);
    }
  });

  function fallbackMailto(name, email, message) {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Ankit,\n\n${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${contactConfig.recipientEmail}?subject=${subject}&body=${body}`;
  }

  function showStatus(text, type) {
    if (!statusEl) return;
    statusEl.textContent = text;
    statusEl.className = `form-status ${type}`;
  }
}

window.initContactForm = initContactForm;
window.contactConfig = contactConfig;
