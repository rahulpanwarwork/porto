$(window).on("scroll", function () {
  if ($(window).scrollTop() > 50) {
    $(".header").addClass("active");
    $(".navbar-brand>img").attr("src", "./assets/images/logo.png");
    $(".sub-header").addClass("d-none");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".header").removeClass("active");
    $(".navbar-brand>img").attr("src", "./assets/images/logo-dark.png");
    $(".sub-header").removeClass("d-none");
  }
});

$(".slick-slider").slick({
  arrows: true,
  prevArrow:
    '<button class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow:
    '<button class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></button>',
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".review-slider").slick({
  arrows: true,
  prevArrow:
    '<button class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow:
    '<button class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></button>',
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

//Bact to top button start
var mybutton = document.querySelector(".back-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 450 ||
    document.documentElement.scrollTop > 450
  ) {
    mybutton.style.opacity = 1;
  } else {
    mybutton.style.opacity = 0;
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
