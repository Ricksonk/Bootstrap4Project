$(document).ready(function(){
  $('.hamburger-menu').click(function(){
    $('.navigation').toggleClass('change');
  });
  $('#works').click(function(){
  $('#contact').collapse('hide');
    $('#about').collapse('hide');
});
$('#contactus').click(function(){
$('#work').collapse('hide');
  $('#about').collapse('hide');
});
$('#aboutus').click(function(){
$('#contact').collapse('hide');
  $('#work').collapse('hide');
});
$(document).ready(function(){
   $(".carousel-item").each(function() {
      var src = $(this).find("img").attr("src");
      $(this)
      .css("background-image","url("+src+")")
      .find("img")
      .remove();
   });
});
});
