$(document).ready(function() {

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("#home").addClass("mobile");
    $(".guest-container").click(function() {
      if ( $(this).hasClass("active") ) {
        $(".guest-container").removeClass("inactive").removeClass("active");
        $(this).children(".soundcloud").children(".player").animate({height: 0}, 1000);
        $(this).children(".soundcloud").animate({height: 0}, 1000);
      } else {
        $(".guest-container").removeClass("active").addClass("inactive");
        $(this).removeClass("inactive").addClass("active");
        $(".soundcloud").css("height", 0);
        $(".player").css("height", 0);
        $(this).children(".soundcloud").children(".player").animate({height: "100px"}, 1000);
        $(this).children(".soundcloud").animate({height: "100px"}, 1000);
      }
    });
  } else {
    $(".guest-container").click(function() {
      if ( $(this).hasClass("active") ) {
        $(".guest-container").removeClass("inactive").removeClass("active");
        $("#main-content").animate({bottom: -120}, "easeOutQuint");
      } else {
        var guest = $(this).data("guest");
        $(".guest-container").removeClass("active").addClass("inactive");
        $(".soundcloud-container").removeClass("active");
        $(this).removeClass("inactive").addClass("active");
        $(".soundcloud-container[data-guest=" + guest + "]").addClass("active");
        $("#main-content").animate({bottom: 0}, "easeOutQuint");
      }
    });
  }

});