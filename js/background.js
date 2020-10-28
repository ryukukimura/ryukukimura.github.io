$(window).on("scroll", function() {
  if (
    $(window).scrollTop() >
    document.body.clientHeight - window.innerHeight - 300
  ) {
    $(".background").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".background").removeClass("active");
  }
});

$(window).on("scroll", function() {
  if (
    $(window).scrollTop() >
    document.body.clientHeight - window.innerHeight - 300
  ) {
    $(".contactC").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".contactC").removeClass("active");
  }
});
