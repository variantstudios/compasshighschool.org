$(document).ready(function() {

  // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }
});

// Date format function for the social feed.
function getFormattedDate(){
  var d = new Date();
  d = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  return d;
}
// Get the social json feed
$.getJSON('https://file-qtpnxdpgkc.now.sh/compass-feed.json', function(data) {
  // loop through the data. i is the count and f is the data
  $.each(data.slice(0,3), function(i, f) {
  // Check to see if the source is from instagram and then use the appropriate format/content
    if (f.source.name == 'instagram') {
      var socialRow = '<a href="' + f.link + '" class="social-post" target="_blank">' +
      '<span class="social-tag instagram"></span>' +
      '<img src="' + f.images.content.url + '" alt="instagram">' +
      '<div class="social-text"><p><small>' + getFormattedDate(f.created_time) +
      '</small></p><p>' + f.content + '</p></div></a>';
      $(socialRow).appendTo('.social-posts');
      // Check to see if the source is from twitter and then use the appropriate format/content  
      console.log(f);
    } 
    // } else if (f.source.name == 'twitter') {
    //   socialRow = '<img src="' + f.link + ' class="social-post">' +
    //   '<span class="social-tag twitter"></span>' +
    //   '<img src="' + f.extra.original.user.profile_image_url_https + '" alt="facebook">' +

    //   // tblRow = '<tr>' + '<td>' + f.source.name + '</td>' +
    //   //  '<td>' + f.content + '</td>' + '<td>' + f.created_time + '</td>' + 
    //   //  '<td>' + '<img src="' + f.extra.original.user.profile_image_url_https + '"/>' + '</td>' + '</tr>';
    //   $(socialRow).appendTo('#userdata tbody'); 
    
  });
});