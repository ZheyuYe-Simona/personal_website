$('.accordion').on('click', '.accordion__header', 
function() {
  $(this).toggleClass('active').next().slideToggle();
});