$(document).ready(function() {

    function queryString() {
    var queryString = window.location.search;
    var varArray = queryString.split("&");
    for (var i = 0; i < varArray.length; i++) {
      var param = varArray[i].split("=");
      //console.log('param', param[1]);
      return param[1];
    }
  };

  
  if ($('body.contact').length > 0) {
      console.log("contact page");
    if (queryString() == "yes") {
        console.log("test: " + queryString());
      $('#contact-message').html("<span><h3>Thank you. Your message has been sent. We will contact you shortly.</h3></span>");
    }
  };
  

});