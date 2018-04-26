$(document).ready(function() {

  // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }
});

// Date format function for the social feed.
// function getFormattedDate(){
//   var d = new Date();
//   d = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
//   return d;
// }
// Get the social json feed
$.getJSON('https://file-sajkowfnde.now.sh/compass-feed.json', function(data) {
  // loop through the data. i is the count and f is the data
  $.each(data.slice(0,3), function(i, f) {
  // Check to see if the source is from instagram and then use the appropriate format/content
    if (f.source.name == 'instagram') {
      var socialRow = '<a href="' + f.link + '" class="social-post" target="_blank">' +
      '<span class="social-tag instagram"></span>' +
      '<img src="' + f.images.content.url + '" alt="instagram">' +
      '<div class="social-text"><p class="date">' + (f.created_time).slice(0,10) + '</p>' +
      '<p>' + f.content + '</p></div></a>';
      $(socialRow).appendTo('.social-posts');
      // Check to see if the source is from twitter and then use the appropriate format/content  
      //console.log(f);
    } 
  });
});


// YouTube Responsive Lightbox
// Function to reveal lightbox and adding YouTube autoplay
function revealVideo(div,video_id) {
  var video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video+'&autoplay=1'; // adding autoplay to the URL
  document.getElementById(div).style.display = 'block';
}

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div,video_id) {
  var video = document.getElementById(video_id).src;
  var cleaned = video.replace('&autoplay=1',''); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = 'none';
}