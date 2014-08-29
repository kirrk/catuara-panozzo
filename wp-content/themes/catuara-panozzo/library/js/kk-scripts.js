jQuery.noConflict();
(function($) {
  $('button.learn').on('click', function() {
      document.location.href = "services";
    });
  $('button.learn').on({
      mouseenter: function() {
        $(this).css('background', '#1c5eb5');
    },
      mouseleave: function() {
      $(this).css('background', '#c7222a');
    }
  });

  $('.col-left, .col-right').on({
    mouseenter: function() {
      $(this, '.col-left').find('.service-item').addClass('hilight');
  },
    mouseleave: function() {
      $(this, '.col-right').find('.service-item').removeClass('hilight');
    }
  });
/* set social media */
  $("#soc-img2").wrap($('<a>', {
    href: 'https://www.facebook.com/pages/Catuara-Panozzo-Consulting-inc/784655844917769?hc_location=timeline'
  }));

  $("#soc-img1").wrap($('<a>', {
    href: '#'
  }));

  $("#soc-img2").hover(function() {
      $(this).css('opacity', '.6');
   }, function() {
      $(this).css('opacity', '1');
    }
  );
    $("#soc-img1").hover(function() {
      $(this).css('opacity', '.6');
   }, function() {
      $(this).css('opacity', '1');
    }
  );


})(jQuery);
