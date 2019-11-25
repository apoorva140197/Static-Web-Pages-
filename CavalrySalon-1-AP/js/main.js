(function ($) {
  "use strict";

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
  });


  // navbar sticky

  $(window).scroll(function () { 


    if ($(window).scrollTop() >300) {
      $('#nav_bar').addClass('navbar-fixed-top');
    }

    if ($(window).scrollTop() < 301) {
      $('#nav_bar').removeClass('navbar-fixed-top');

    }
  });

  // Cache selectors
  var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 40,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
      scrollTop: offsetTop
    }, 500);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });



// slant header
  $('.section-one').hover(function() {
  $('.container').toggleClass('one-is-active');
});

$('.section-two').hover(function() {
  $('.container').toggleClass('two-is-active');
});




$('.section-one1').hover(function() {
  $('.container').toggleClass('one-is-active1');
});

$('.section-two1').hover(function() {
  $('.container').toggleClass('two-is-active1');
});



$('.section-one2').hover(function() {
  $('.container').toggleClass('one-is-active2');
});

$('.section-two2').hover(function() {
  $('.container').toggleClass('two-is-active2');
});



$('.section-one3').hover(function() {
  $('.container').toggleClass('one-is-active3');
});

$('.section-two3').hover(function() {
  $('.container').toggleClass('two-is-active3');
});






})(jQuery);


document.getElementById("defaultOpen").click();
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";

}