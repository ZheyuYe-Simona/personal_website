$('.open').on('click',
function() {
  $('.overlay, .modal').addClass('active');
});

$('.close, .overlay').on('click',
function() {
  $('.overlay, .modal').removeClass('active');
});

$('.watch, .overlay').on('click',
function() {
  window.location.href='http://www.bilibili.com/video/BV1GW41167Yt?from=search&amp;seid=11312672493591327423';
});


// Pressing the escape key will close the modal.
$(document).keyup(function(event) {
  if(event.keyCode === 27) {
    $('.overlay, .modal').removeClass('active');
  }
});