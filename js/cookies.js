document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookieConsent");
  const acceptButton = document.getElementById("acceptCookies");

  // Check if the user has already accepted cookies
  if (!localStorage.getItem("cookieAccepted")) {
    cookieConsent.style.display = "block";
  }

  // Handle the "Accept" button click
  acceptButton.addEventListener("click", function () {
    localStorage.setItem("cookieAccepted", "true");
    cookieConsent.style.display = "none";
  });
});
