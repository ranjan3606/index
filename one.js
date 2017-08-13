$(document).ready(function(){
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    
    var target = this.hash;
    var $target = $(target);
    
    //Scroll and show hash
    $('html, body').animate ({
      'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
      window.location.hash = target;
    });
  });
});