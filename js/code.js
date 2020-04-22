$(function() {
    var w = $(window).width();
    if (w <= 530) {      
      app.ui.mobileMenu();
    }
});

var app = {}

app.ui = {
  mobileMenu: function() {
    $('#mobile-link').click(function() {
      $('#nav_bar nav').toggleClass('show');
      $('span', this).toggleClass('icon-menu icon-x');
      return false;
    });
  }
};
