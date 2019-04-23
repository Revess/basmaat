var navLinks = [
  "#homeLink",
  "#aboutLink",
  "#csdLink",
  "#compositionLink",
  "#contactLink"
];
//Scroll and move highlight
let navHeight = $("#topNav").outerHeight();
if (
  $(window).scrollTop() + navHeight >= 0 &&
  $(window).scrollTop() + navHeight <= $("#Home").outerHeight()
) {
  $("#homeLink").attr("style", "color: rgb(255,255,255) !important");
  $.each(navLinks, function(index, value) {
    if (value !== "#homeLink") {
      $(value).attr("style", "color: rgba(255,255,255,0.5) !important");
    }
  });
}
if (
  $(window).scrollTop() + navHeight >= $("#About").position().top &&
  $(window).scrollTop() + navHeight <
    $("#About").position().top + $("#About").outerHeight()
) {
  $("#aboutLink").attr("style", "color: rgb(255,255,255) !important");
  $.each(navLinks, function(index, value) {
    if (value !== "#aboutLink") {
      $(value).attr("style", "color: rgba(255,255,255,0.5) !important");
    }
  });
}
if (
  $(window).scrollTop() + navHeight >= $("#CSD").position().top &&
  $(window).scrollTop() + navHeight <
    $("#CSD").position().top + $("#CSD").outerHeight()
) {
  $("#csdLink").attr("style", "color: rgb(255,255,255) !important");
  $.each(navLinks, function(index, value) {
    if (value !== "#csdLink") {
      $(value).attr("style", "color: rgba(255,255,255,0.5) !important");
    }
  });
}
if (
  $(window).scrollTop() + navHeight >= $("#Composition").position().top &&
  $(window).scrollTop() + navHeight <
    $("#Composition").position().top + $("#Composition").outerHeight()
) {
  $("#compositionLink").attr("style", "color: rgb(255,255,255) !important");
  $.each(navLinks, function(index, value) {
    if (value !== "#compositionLink") {
      $(value).attr("style", "color: rgba(255,255,255,0.5) !important");
    }
  });
}
if (
  $(window).scrollTop() + navHeight >= $("#Contact").position().top ||
  $(window).scrollTop() + navHeight + $(window).outerHeight() >=
    $("footer").position().top
) {
  $("#contactLink").attr("style", "color: rgb(255,255,255) !important");
  $.each(navLinks, function(index, value) {
    if (value !== "#contactLink") {
      $(value).attr("style", "color: rgba(255,255,255,0.5) !important");
    }
  });
}
