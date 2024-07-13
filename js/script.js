$(document).ready(function(){
    $('.your-class').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev" style="position: absolute; top: 50%; transform: translate(-50%); left: +55px; border:none; background-color:#424B5ACC;"><img style="width: 48px; heigh: 48px; background-color:#424B5ACC;" src="../images/icons/Chevron_left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"style="position: absolute; top: 50%; transform: translate(-50%); left: +1000px; border:none;padding: 0;"><img style=" background-color:#424B5ACC;" src="../images/slides/arrownext.png"></button>',

    });
  });