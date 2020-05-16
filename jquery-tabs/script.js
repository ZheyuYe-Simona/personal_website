$('.tab-list').on('click', '.tab', 
function(event) {
  event.preventDefault();

  $('.tab').removeClass('active');
  $('.tab-content').removeClass('show');
  $(this).addClass('active');
  $($(this).attr('href')).addClass('show');
});