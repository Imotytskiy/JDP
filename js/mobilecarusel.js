window.addEventListener("load", function () {
  // Перевірка, чи на мобільному пристрої
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // Якщо користувач на мобільному пристрої
  if (isMobile) {
    // Знаходимо елемент <img> з id "mobilestart"
    const imageElement = document.getElementById("mobilestart");

    // Перевіряємо, чи елемент знайдений
    if (imageElement) {
      // Виконуємо клік на елементі
      imageElement.click();
    } else {
      console.error('Елемент <img> з id "mobilestart" не знайдено!');
    }
  }
});
