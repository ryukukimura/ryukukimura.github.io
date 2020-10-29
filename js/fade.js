$(function() {
  $(window).scroll(function() {
    $(".effect-fade").each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });
  });
});

$(function() {
  $(window).scroll(function() {
    $(".effect-fade-fromL").each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });
  });
});

$(function() {
  $(window).scroll(function() {
    $(".effect-fade-fromR").each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll");
      }
    });
  });
});

$(function() {
  $(".name").addClass("active");
});

$(function() {
  $(".hello1").addClass("active");
});

$(function() {
  $(".hello2").addClass("active");
});
