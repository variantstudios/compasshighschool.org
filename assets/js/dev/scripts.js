$(document).ready(function() {

  // Add a class of .mq if the browser supports Media Query and '.no-mq' if it doesn't
  if (Modernizr.mq('only all')) {
    $('html').addClass('mq');
  } else {
    $('html').addClass('no-mq');
  }

  // Header
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

  $('a').each(function() {
    // Exit quickly if this is the wrong type of URL
    if (this.protocol !== 'http:' && this.protocol !== 'https:') {
      return;
    } else if ( this.target == '_blank') {
      return;
    }

    // Find the ID of the YouTube video
    var id, matches;
    if (
      this.hostname === 'youtube.com' ||
      this.hostname === 'www.youtube.com'
    ) {
      // For URLs like https://www.youtube.com/watch?v=xLrLlu6KDss
      matches = this.search.match(/[?&]v=([^&]*)/);
      id = matches && matches[1];
    } else if (this.hostname === 'youtu.be') {
      // For URLs like https://youtu.be/xLrLlu6KDss
      id = this.pathname.substr(1);
    }
    // Check that the ID only has alphanumeric characters, to make sure that
    // we don't introduce any XSS vulnerabilities.
    // var validatedID;
    // if (id && id.match(/^[a-zA-Z0-9]*$/)) {
    //   validatedID = id;
    // }
    // Add the embedded YouTube video, and remove the link.
    if (id) {
      $(this)
        .before ('<div class="videoWrapper"><iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/' + id + '?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>')
        .remove();
    }
  });

  

});




