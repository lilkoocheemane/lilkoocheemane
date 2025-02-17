// Dynamic Header Background
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Populate Business Info
document.addEventListener('DOMContentLoaded', () => {
  const businessName = "Sample Business"; // Replace with data from Google Sheets
  const aboutText = "We are a trusted business providing top-notch services."; // Replace with data from Google Sheets

  document.getElementById('business-name').textContent = businessName;
  document.getElementById('hero-business-name').textContent = businessName;
  document.getElementById('about-text').textContent = aboutText;
  document.getElementById('footer-business-name').textContent = businessName;
  document.getElementById('footer-year').textContent = new Date().getFullYear();
});

// Google Reviews (Placeholder)
// You can embed Google Reviews manually or use a third-party service like EmbedSocial.
