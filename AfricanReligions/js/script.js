$(document).ready(function() {
  $('.invisibleC').hide();
  $('.invisibleI').hide();
  $('#descriptionAreaC').hide();
  $('#descriptionAreaI').hide();
  $('#n1').hover(function() {
    $('.invisibleC').fadeIn(false);
  },
                 function() {
                   $('.invisibleC').fadeOut(false);
                 });
  $('#n1').click(function() {
    $('#descriptionAreaC').slideToggle(200);
  });
  $('#n2').hover(function() {
    $('.invisibleI').fadeIn(false);
  },
                 function() {
                   $('.invisibleI').fadeOut(false);
                 });
  
});
