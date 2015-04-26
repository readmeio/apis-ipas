$(document).ready(function() {
  var shown = false;
  $(".guest-image").click(function() {
    // refactor to target specific episode guest
    var parentElem = $(this).parents("#guests-container");
    if (shown === false) {
      parentElem.css("top", 0);
      $(this).css("background", "url(../img/guests/001-alex-on@2x.png) no-repeat center");
      $(this).css("background-size", "contain");
      shown = true;
    } else {
      $(this).css("background", "url(../img/guests/001-alex-off@2x.png) no-repeat center");
      $(this).css("background-size", "contain");
      parentElem.css("top", "");
      shown = false;
    }
  });

});