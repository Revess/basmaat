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
  });