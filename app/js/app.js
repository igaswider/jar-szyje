$(document).ready(function() {
  /*dropdown menu event*/
  $('.hamburger').click(function() {
    $('.dropdown-menu').toggleClass('show-menu');

  });

  $('.dropdown-menu').click(function() {

    $('.dropdown-menu').removeClass('show-menu');
  });

  /*scroll to section*/
  function scroll(e) {

    var href = $(this).attr('href');

    e.preventDefault();

    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 1000);

    location.hash = href;

  }

  $('a[href^="#"]').click(scroll);

  /*pulse element - click event*/

  $('.coat__logo--pulse').each(function() {
    $(this).on('click', function(e) {
      $('html, body').animate({
        scrollTop: $(this).parent().offset().top
      });
    });
  });

  /*switching background-image + paragraph placement*/

  $('.shirt__bg-narrow').on('click', function(e) {
    $('.shirt__image--three').toggleClass('shirt__image--sec');
    $('.shirt__txt--three').toggleClass('shirt__txt--sec');
  });

  $('.fem__bg-narrow').each(function() {
    $(this).on('click', function(e) {
      $('.fem__image--one').toggleClass('fem__image--sec');
      $('.fem__image--two').toggleClass('fem__image--trip');

      $txtEl = $('.fem__txt--sec');

      $txtEl.css('display') === 'none' ? $txtEl.css({
        'display': 'inline-block'
      }) : $txtEl.css({
        'display': 'none'
      });

      $txtElFirst = $('.fem__txt--first');
      $txtElFirst.css('display') === 'block' ? $txtElFirst.css({
        'display': 'none'
      }) : $txtElFirst.css({
        'display': 'block'
      });
    });
  });


  /*mouseevents*/

  /*social icon transform*/
  $('i').each(function() {
    $(this).on('mouseenter', function() {
      $(this).css({
        'transform': 'rotate(360deg)'
      }).css({
        'transition': '1.5s'
      });
    });

    $(this).on('mouseleave', function() {
      $(this).css({
        'transform': 'rotate(-360deg)'
      }).css({
        'transition': '1.5s'
      });
    });
  });

  /*onscroll events*/
  $(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    var wHeight = $(window).height();
    var dHeight = $(document).height();
    var height = $(this).height();
    var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
    var upDown = wScroll - scrollBottom;
    
    $('.coat--bg-opacity').each(function() {
      if (wScroll >= $(this).offset().top - 500 && wScroll <= $(this).offset().top + 200) {
        $(this).css({
          'transition': '3s'
        }).css({
          'opacity': '0'
        });
      } else {
        $(this).css({
          'transition': '3s'
        }).css({
          'opacity': '0.5'
        });
      }
    });
  });

});

/*onload events*/

$(window).on('load', function() {
  $('.start__content--bg-video').css({
    'opacity': '1'
  });

  setTimeout(function() {
    $('.start__logo').css({
      'top': '35%'
    });
  }, 1500);

  setTimeout(function() {
    $('.start__logo').css({
      'opacity': '0'
    }).css({
      'transition': '1s'
    });
  }, 4500);

  setTimeout(function() {
    $('.start__text').css({
      'opacity': '0'
    }).css({
      'transition': '1s'
    });
  }, 5000);

});
