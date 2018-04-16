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
  };

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
    $('.shirt__txt--four').toggleClass('shirt__txt--sec');
  });

  $('.fem__bg-narrow').each(function() {
    $(this).on('click', function(e) {
      $('.fem__image--one').toggleClass('fem__image--sec');
      $('.fem__image--two').toggleClass('fem__image--trip');

      $('.display').each(function() {
        $(this).css('display') === 'none' ? $(this).css({
          'display': 'inline-block'
        }) : $(this).css({
          'display': 'none'
        })
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
});

/*onscroll events*/
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();
  var wHeight = $(window).height();
  var dHeight = $(document).height();
  var height = $(this).height();
  var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
  var upDown = wScroll - scrollBottom;

  /*background opacity*/
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

  /*paragraphs on scroll*/
  $('.up').each(function() {

    if (wScroll >= $(this).offset().top - 650 && wScroll <= $(this).offset().top + 200) {
      if ($('.shirt__txt--one.up > p') !== null && window.innerWidth < 700 && window.innerHeight < window.innerWidth) {
        $(this).css({
          webkitTransform: 'translateY(-3rem)',
          'transform': 'translateY(-3rem)',
          webktiTransition: '5s',
          'transition': '5s'
        });
      } else {
        $(this).css({
          webkitTransform: 'translateY(-7rem)',
          'transform': 'translateY(-7rem)',
          webktiTransition: '5s',
          'transition': '5s'
        });
      }

    }
  });

  $('.down').each(function() {
    if (wScroll >= $(this).offset().top - 500 && wScroll <= $(this).offset().top + 200) {
      $(this).css({
        webkitTransform: 'translateY(7rem)',
        'transform': 'translateY(7rem)',
        webkitTransition: '5s',
        'transition': '5s'
      })
    }
  });

});


/*onload events*/

$(window).on('load', function() {
  $('.start__content--bg-video').css({
    'opacity': '1'
  });

  if (window.innerWidth < 700 && window.innerHeight < window.innerWidth) {
    setTimeout(function() {
      $('.start__logo').css({
        'top': '5%'
      });
    }, 1500);
  } else {
    setTimeout(function() {
      $('.start__logo').css({
        'top': '25%'
      });
    }, 1500);
  }


  setTimeout(function() {
    $('.start__logo').css({
      'opacity': '0',
      'transition': '1s'
    });
  }, 4500);

  setTimeout(function() {
    $('.start__text').css({
      'opacity': '0',
      'transition': '1s'
    });
  }, 5000);

});
