$(document).ready(function () {
  $(".your-class").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:
      '<button type="button" class="slick-prev" style="position: absolute; top: 50%; transform: translateY(-50%); left: 10px; border: none; padding: 0; z-index: 1;"><img style="width: 48px; height: 48px; background-color:#424B5ACC;" src="../images/icons/Chevron_left.svg" alt="Previous"></button>',
    nextArrow:
      '<button type="button" class="slick-next" style="position: absolute; top: 50%; transform: translateY(-50%); right: 10px; border: none; padding: 0; z-index: 1;"><img style="width: 48px; height: 48px; background-color:#424B5ACC;" src="../images/slides/arrownext.png" alt="Next"></button>',
  });
});
