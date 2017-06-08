$(document).ready(function() {

  $('.menu-btn').click(function() {
     $('body').addClass( "showMenu" );
    });

      $('.menu-btn-close').click(function() {
     $('body').removeClass( "showMenu" );
    });

    console.log('test');
});