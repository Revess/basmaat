window.sr = ScrollReveal();
sr.reveal(".navbar", {
  duration: 2000,
  origin: "bottom"
});

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

//Text and Title animation in carousel
$(document).ready(function() {
  var carouselPos = 0;
  $("#carouselComposition").on("slide.bs.carousel", function(direction) {
    if(direction.direction == "left"){
      carouselPos++;
    } else {
      carouselPos--;
    }
    if(carouselPos < 0){
      carouselPos=((carouselPos%4)+4)%4;
    }
    carouselPos%=4;
    if (carouselPos == 0) {
      $(".carouselHeading").text("Spaced Out");
      $(".carouselDescription").text("Spaced Out is an animation created by the Croatian animator Stella Hartman. She is a animation graduate currently studying to get her masters degree. In this animation the composition is used to exaggerate the comedic moments. The Sound-Design has also been done by me.");
    } else if (carouselPos == 1) {
      $(".carouselHeading").text("The Joy of Meeting Again");
      $(".carouselDescription").text("In this animation, based on the book Nicholas Nickleby by Charles Dickens, a futuristic character has to say goodbye to its life that it is currently living. This is not without the needed pain and tears, but is all for a good thing a new and bright future. This is what I tried to express over the whole length of the video with my composition and sounds. Sound-Design and Composition done by me, this is a university project.");
    } else if (carouselPos == 2) {
      $(".carouselHeading").text("Barcode");
      $(".carouselDescription").text("In this piece there is a bigger focus on rhythms and the different layers there of. With the piece starting with more of an organized chaos that later resolves itself at the highest point of the animation. Sound-Design and Composition done by me, this is a university project.");
    } else if (carouselPos == 3) {
      $(".carouselHeading").text("Blue honey");
      $(".carouselDescription").text("A bee on a journey of becoming part of the group and being accepted by the 'bee' society. On his way he gets pushed away, only to find a secret place where the 'blue honey' is stored. He brings it home, not knowing what havoc it will bring. Sound-Design and Composition done by me, this is a university project.");
    }
  });

  $("#carouselVideo").click(function() {
    $(".carousel").carousel("pause");
    console.log("click");
  });
});

//Change highlight color Navbar
var navLinks = [
  "#homeLink",
  "#aboutLink",
  "#csdLink",
  "#compositionLink",
  "#contactLink"
];

$("#homeLink").click(function() {
  $(this).attr("style", "color: rgb(255,255,255) !important");
  $.each(navLinks, function(index, value) {
    if (value !== "#homeLink") {
      $(value).attr("style", "color: rgba(255,255,255,0.5) !important");
    }
  });
});

$("#aboutLink").click(function() {
  $(this).attr("style", "color: rgb(255,255,255) !important");
  $.each(navLinks, function(index, value) {
    if (value !== "#aboutLink") {
      $(value).attr("style", "color: rgba(255,255,255,0.5) !important");
    }
  });
});

$("#homeButton").click(function() {
  $("#aboutLink").attr("style", "color: rgb(255,255,255) !important");
  $.each(navLinks, function(index, value) {
    if (value !== "#aboutLink") {
      $(value).attr("style", "color: rgba(255,255,255,0.5) !important");
    }
  });
});

$("#csdLink").click(function() {
  $(this).attr("style", "color: rgb(255,255,255) !important");
  $.each(navLinks, function(index, value) {
    if (value !== "#csdLink") {
      $(value).attr("style", "color: rgba(255,255,255,0.5) !important");
    }
  });
});

$("#compositionLink").click(function() {
  $(this).attr("style", "color: rgb(255,255,255) !important");
  $.each(navLinks, function(index, value) {
    if (value !== "#compositionLink") {
      $(value).attr("style", "color: rgba(255,255,255,0.5) !important");
    }
  });
});

$("#contactLink").click(function() {
  $(this).attr("style", "color: rgb(255,255,255) !important");
  $.each(navLinks, function(index, value) {
    if (value !== "#contactLink") {
      $(value).attr("style", "color: rgba(255,255,255,0.5) !important");
    }
  });
});