import langdata from "./langdata.js";

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('language-toggle');
  const portfolio = document.getElementById('portfolio');
  const about = document.getElementById('about');
  const contact = document.getElementById('contact');

  const updateTextContent = () => {
      const lang = toggle.checked ? 'pl' : 'en';
      portfolio.textContent = langdata.languages[lang].strings['portfolio'];
      about.textContent = langdata.languages[lang].strings['about'];
      contact.textContent = langdata.languages[lang].strings['contact'];
  };

  toggle.addEventListener('change', updateTextContent);
  updateTextContent(); // Initial call to set the correct language on load
});