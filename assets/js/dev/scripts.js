$(document).ready(function() {

  // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }
});

// YouTube Responsive Lightbox
// Function to reveal lightbox and adding YouTube autoplay
var revealVideo; // eslint-disable-line no-unused-vars
revealVideo = function(div,video_id) {
  var video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video+'&autoplay=1'; // adding autoplay to the URL
  document.getElementById(div).style.display = 'block';
};
// Hiding the lightbox and removing YouTube autoplay
var hideVideo; // eslint-disable-line no-unused-vars
hideVideo = function(div,video_id) {
  var video = document.getElementById(video_id).src;
  var cleaned = video.replace('&autoplay=1',''); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = 'none';
};

// $(document).on('scroll', function(){
//   console.log('scroll');
//   if
//   ($(document).scrollTop() > 117){
//     $('.siteheader').addClass('shrink');
//     console.log('shrink');
//   }
//   else
//   {
//     $('.siteheader').removeClass('shrink');
//     console.log('no shrink');
//   }
// });

function resizeHeaderOnScroll() {
  var distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 111,
    headerEl = document.getElementById('side-header');
  
  if (distanceY > shrinkOn) {
    headerEl.classList.add('smaller');
  } else {
    headerEl.classList.remove('smaller');
  }
}

window.addEventListener('scroll', resizeHeaderOnScroll);
