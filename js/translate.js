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
        console.log("Language set to local: " , localStorage.getItem('language'));
    };



    langSelect.addEventListener('change', updateTextContent);
    updateTextContent(); // Initial call to set the correct language on load
});