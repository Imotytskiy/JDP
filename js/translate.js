import i18next from 'i18next';

// Ініціалізація i18next
i18next.init({
  lng: 'en', // початкова мова
  debug: true, // режим налагодження
  resources: {
    en: {
      translation: {
        "welcome": "Welcome to our website!",
        "description": "This is an example of i18next integration."
      }
    },
    uk: {
      translation: {
        "welcome": "Ласкаво просимо на наш сайт!",
        "description": "Це приклад інтеграції i18next."
      }
    }
  }
}, function(err, t) {
  // Ініціалізація завершена, переклад доступний через функцію t
  updateContent();
});

function updateContent() {
  document.getElementById('welcome').innerHTML = i18next.t('welcome');
  document.getElementById('description').innerHTML = i18next.t('description');
}