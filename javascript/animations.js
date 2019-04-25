window.sr = ScrollReveal();
// sr.reveal(".navbar", {
//   duration: 2000,
//   origin: "bottom"
// });

sr.reveal(".footer", {
  duration: 2000,
  origin: "left",
  distance: "1rem"
});

//Startup animation
sr.reveal("#homeText", {
  delay: 50,
  duration: 2000,
  origin: "right",
  distance: "0.5rem",
  reset: true
});
sr.reveal("#homeButton", {
  delay: 50,
  duration: 2000,
  origin: "left",
  distance: "0.5rem",
  reset: true
});

sr.reveal("#homeBox", {
  delay: 50,
  duration: 2000,
  origin: "bottom",
  distance: "1rem",
  reset: true
});

//Default Fades
sr.reveal("#fadeLeft", {
  duration: 2000,
  origin: "left",
  distance: "1rem"
});

sr.reveal("#fadeRight", {
  duration: 2000,
  origin: "right",
  distance: "1rem"
});

sr.reveal("#fadeTop", {
  duration: 2000,
  origin: "top",
  distance: "2rem"
});

sr.reveal("#fadeBottom", {
  duration: 2000,
  origin: "bottom",
  distance: "2rem"
});

var selectNavbarCollapse = $(".navbar-collapse");

var heightNavbarCollapsed = $(".navbar").outerHeight(true);
var heightNavbarExpanded = 0;
var navBarVariableHeight = heightNavbarExpanded;

function paddingSmall() {
  $("body").css("padding-top", heightNavbarCollapsed + "px");
}
function paddingGreat() {
  $("body").css("padding-top", heightNavbarExpanded + "px");
}

//Text and Title animation in carousel
$(document).ready(function() {
  var heightOfFrontPage = $(window).height() - $("#navBarTop").outerHeight();
  $("#Home").css("height", heightOfFrontPage.toString() + "px"); 
  
  $("#topNav")
    .css("opacity", 0)
    .slideDown("slow")
    .animate({ opacity: 1 }, { queue: false, duration: "slow" });

  paddingSmall();

  selectNavbarCollapse.on("show.bs.collapse", function() {
    navBarVariableHeight = heightNavbarExpanded;
    if (heightNavbarExpanded == 0) {
      heightNavbarExpanded = heightNavbarCollapsed + $(this).outerHeight(true);
      navBarVariableHeight = heightNavbarExpanded;
    }
    if (
      $(window).scrollTop() + navBarVariableHeight >
      $("#topOfPage").position().top
    ) {
      paddingGreat();
    }
  });

  selectNavbarCollapse.on("hide.bs.collapse", function() {
    navBarVariableHeight = heightNavbarCollapsed;
    paddingSmall();
  });

  var sections = ["#About", "#CSD", "#Composition", "#Contact"];

  $("#moreArrows").html("");

  if ($(window).width() < 991) {
    $("#navBarTop").removeClass("navTrans");
    $.each(sections, function(index, value) {
      $(value).css("max-width", "90%");
      $(value).css("margin-left", "5%");
    });
  }

  $(window).resize(function() {
    //Custom sizing for mobile devices
    if ($(window).width() < 991) {
      $("#navBarTop").removeClass("navTrans");
      $.each(sections, function(index, value) {
        $(value).css("max-width", "90%");
        $(value).css("margin-left", "5%");
      });
    } else {
      if (
        $(window).scrollTop() <
        $("#homeBox").position().top + $("#homeBox").outerHeight()
      ) {
        $("#navBarTop").addClass("navTrans");
      }
      if (
        $(window).scrollTop() >=
        $("#homeBox").position().top + $("#homeBox").outerHeight()
      ) {
        $("#navBarTop").removeClass("navTrans");
      }
      if (
        document.documentElement.clientWidth > 767 &&
        selectNavbarCollapse.hasClass("in")
      ) {
        selectNavbarCollapse.removeClass("in").attr("aria-expanded", "false");
        paddingSmall();
      }
      $.each(sections, function(index, value) {
        $(value).css("max-width", "75%");
        $(value).css("margin-left", "12.5%");
      });
    }
  });

  //Change highlight color Navbar
  var navLinks = [
    "#homeLink",
    "#aboutLink",
    "#csdLink",
    "#compositionLink",
    "#contactLink"
  ];

  //Scrolling animations
  var scrollSpeed = 250;
  $("#homeLink").click(function() {
    paddingSmall();
    $("html, body").animate(
      {
        scrollTop: 0
      },
      scrollSpeed
    );
  });

  $("#homeArrow").click(function() {
    let positionPage = $("#About").position().top + 69;
    if ($(window).width() < 991 && $("#homeLink").is(":visible")) {
      $("html, body").animate(
        {
          scrollTop: positionPage - heightNavbarExpanded
        },
        scrollSpeed
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $("#About").position().top
        },
        scrollSpeed
      );
    }
  });

  $("#aboutLink").click(function() {
    let positionPage = $("#About").position().top + 69;
    if ($(window).width() < 991 && $("#homeLink").is(":visible")) {
      $("html, body").animate(
        {
          scrollTop: positionPage - heightNavbarExpanded
        },
        scrollSpeed
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $("#About").position().top
        },
        scrollSpeed
      );
    }
  });

  $("#homeButton").click(function() {
    let positionPage = $("#About").position().top + 69;
    if ($(window).width() < 991 && $("#homeLink").is(":visible")) {
      $("html, body").animate(
        {
          scrollTop: positionPage - $("#topNav").outerHeight()
        },
        scrollSpeed
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $("#About").position().top
        },
        scrollSpeed
      );
    }
  });

  $("#csdLink").click(function() {
    let positionPage = $("#CSD").position().top + 69;
    if ($(window).width() < 991 && $("#homeLink").is(":visible")) {
      $("html, body").animate(
        {
          scrollTop: positionPage - $("#topNav").outerHeight()
        },
        scrollSpeed
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $("#CSD").position().top
        },
        scrollSpeed
      );
    }
  });

  $("#compositionLink").click(function() {
    let positionPage = $("#Composition").position().top + 69;
    if ($(window).width() < 991 && $("#homeLink").is(":visible")) {
      $("html, body").animate(
        {
          scrollTop: positionPage - $("#topNav").outerHeight()
        },
        scrollSpeed
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $("#Composition").position().top
        },
        scrollSpeed
      );
    }
  });

  $("#contactLink").click(function() {
    let positionPage = $("#Contact").position().top + 69;
    if ($(window).width() < 991 && $("#homeLink").is(":visible")) {
      $("html, body").animate(
        {
          scrollTop: positionPage - $("#topNav").outerHeight()
        },
        scrollSpeed
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: $("#Contact").position().top
        },
        scrollSpeed
      );
    }
  });

  //Carousel Rules
  var carouselPos = 0;

  $("#carouselComposition").on("slide.bs.carousel", function(direction) {
    if (direction.direction == "left") {
      carouselPos++;
    } else {
      carouselPos--;
    }
    if (carouselPos < 0) {
      carouselPos = ((carouselPos % 4) + 4) % 4;
    }
    carouselPos %= 4;
    if (carouselPos == 0) {
      $(".carouselHeading").text("Spaced Out");
      $(".carouselDescription").text(
        "Spaced Out is an animation created by the Croatian animator Stella Hartman. Stella is an animation graduate currently studying to get her masters degree. In this animation the composition is used to exaggerate certain comedic moments. I created the composition as well as the Sound-Design."
      );
    } else if (carouselPos == 1) {
      $(".carouselHeading").text("The Joy of Meeting Again");
      $(".carouselDescription").text(
        "In this animation, based on the book Nicholas Nickleby by Charles Dickens, a futuristic character has to say goodbye to its life that it is currently living. This is not without the needed pain and tears, but is all for a good thing a new and bright future. This is what I tried to express over the whole length of the video with my composition and sounds. I created the composition as well as the Sound-Design, this is a university project."
      );
    } else if (carouselPos == 2) {
      $(".carouselHeading").text("Barcode");
      $(".carouselDescription").text(
        "In this piece there is a bigger focus on rhythms and the different layers there of. With the piece starting with more of an organized chaos that later resolves itself at the highest point of the animation. I created the composition as well as the Sound-Design, this is a university project."
      );
    } else if (carouselPos == 3) {
      $(".carouselHeading").text("Blue honey");
      $(".carouselDescription").text(
        "A bee on a journey of becoming part of the group and being accepted by the 'bee' society. On his way he gets pushed away, only to find a secret place where the 'blue honey' is stored. He brings it home, not knowing what havoc it will bring. I created the composition as well as the Sound-Design, this is a university project."
      );
    }
  });

  $("#carouselVideo").click(function() {
    $(".carousel").carousel("pause");
  });

  // if ($("html,body").is(":animated")) {
  //   paddingGreat();
  // } else {
  //   paddingSmall();
  // }
});
