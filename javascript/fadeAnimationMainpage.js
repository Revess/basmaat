$(window).scroll(function() {
  //For the navbar fade
  if ($(window).width() > 991) {
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
  }
  if (
    $(window).scrollTop() +
      $(window).outerHeight() -
      $("#downArrow").outerHeight() >
    $("#About").position().top
  ) {
    $("#homeArrow").css("transition", "all 0.2s ease-in-out");
    $("#homeArrow").css("color", "rgba(255,255,255,0");
  }
  if (
    $(window).scrollTop() +
      $(window).outerHeight() -
      $("#downArrow").outerHeight() <
    $("#About").position().top
  ) {
    $("#homeArrow").css("transition", "all 0.2s ease-in-out");
    $("#homeArrow").css("color", "rgb(255,255,255)");
  }
});
