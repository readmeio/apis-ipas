$(document).ready(function() {
  var podcastInfo = {
  koberger: {
    episode: "004",
    guest: "Gregory Koberger",
    company: "ReadMe.io",
    ipa: "Pliney the Elder",
    duration: 42
  },
  amber: {
    episode: "003",
    guest: "Amber Feng",
    company: "Stripe",
    ipa: "Owlbert IPA",
    duration: 35
  },
  alex: {
    episode: "002",
    guest: " Alex Maccaw",
    company: "Stripe",
    ipa: "Owlbert IPA",
    duration: 30
  },
  kin: {
    episode: "001",
    guest: "Kin Lane",
    company: "API Evangelist",
    ipa: "Owlbert IPA",
    duration: 40
  }};

  var soundcloud = false;
  
  $(".guest-image").click(function() {
    // soundcloud player not showing => show it
    var guest = $(this).parent(".guest").attr("id");

    $("#soundcloud").find(".episode").html(podcastInfo[guest].episode + " ");
    $("#soundcloud").find(".guest-name").html(podcastInfo[guest].guest);
    $("#soundcloud").find(".company").html(podcastInfo[guest].company);
    $("#soundcloud").find(".time").html(podcastInfo[guest].duration + " minutes");
    $("#soundcloud").find(".ipa-name").html(podcastInfo[guest].ipa);

    if ( soundcloud === false ) {
      soundcloud = true;
      $(this).addClass("active");
      $(".guest-image").not(this).css("opacity", 0.3);
      $(this).parents("#guests-container").css("top", 0);
      $("#soundcloud").css("display", "block");
    // soundcloud player is showing for selected guest => close it
    } else if ( soundcloud === true && $(this).hasClass("active") ) {
      soundcloud = false;
      $(this).removeClass("active");
      $(".guest-image").css("opacity", 1.0);
      $(this).parents("#guests-container").css("top", "");
      $("#soundcloud").css("display", "none");
    // soundcloud player showing, but different guest selected
    } else if ( soundcloud === true && !$(this).hasClass("active") ) {
      $(".guest-image").removeClass("active");
      $(this).addClass("active");
      $(this).css("opacity", 1.0);
      $(".guest-image").not(this).css("opacity", 0.3);
      $(".guest-image").not(this).css("opacity", 0.3);
      $(this).parents("#guests-container").css("top", 0);
      $("#soundcloud").css("display", "block");
    }
  });

});