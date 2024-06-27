import langdata from "./langdata.js";

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang_choice_1');
    const portfolio = document.getElementById('portfolio');
    const about = document.getElementById('about');
    const contact = document.getElementById('contact');
    const price = document.getElementById('price');

    const updateTextContent = () => {
        const lang = langSelect.value;
        localStorage.setItem('language', lang);
        portfolio.textContent = langdata.languages[lang].strings['portfolio'];
        about.textContent = langdata.languages[lang].strings['about'];
        contact.textContent = langdata.languages[lang].strings['contact'];
        price.textContent = langdata.languages[lang].strings['price'];
    };

    // Check if a language is stored in localStorage and set the dropdown value accordingly
    if (localStorage.getItem('language')) {
        langSelect.value = localStorage.getItem('language');
    } else {
        langSelect.value = langSelect.value; // Use the default value from the dropdown
    }

    // Initial call to set the correct language on load
    updateTextContent();

    // Add the event listener to the dropdown
    langSelect.addEventListener('change', updateTextContent);
});


document.getElementById('navbar-toggler').addEventListener('click', function() {
    var button = this;
    var icon = button.querySelector('i');
  
    setTimeout(function() { // Use a timeout to wait for the attribute to be updated
      if (button.getAttribute('aria-expanded') === 'true') {
        if (icon) {
          icon.className = 'bi bi-x-lg';
        } else {
          var newIcon = document.createElement('i');
          newIcon.className = 'bi bi-x-lg';
          button.appendChild(newIcon);
        }
      } else {
        if (icon) {
          icon.className = 'bi bi-list';
        } else {
          var newIcon = document.createElement('i');
          newIcon.className = 'bi bi-list';
          button.appendChild(newIcon);
        }
      }
    }, 0);
  });