
$(document).ready(function() {
    
// Helper function to get form data in the supported format
function getFormDataString(formEl) {
  var formData = new FormData(formEl),
      data = [];

  for (var keyValue of formData) {
    data.push(encodeURIComponent(keyValue[0]) + "=" + encodeURIComponent(keyValue[1]));
  }

  return data.join("&");
}

// Fetch the form element
var formEl = document.getElementById("contact-form");

// Override the submit event
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submitted");
    
  if (grecaptcha) {
    var recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) { // reCAPTCHA not clicked yet
      return false;
    }
  }

  var request = new XMLHttpRequest();

  request.addEventListener("load", function () {
      console.log("status: " + request.status);
    if (request.status === 200) { // CloudCannon redirects on success
      // It worked
      
        formEl.reset(); //reset form
        grecaptcha.reset(); //reset google recaptcha
        document.getElementById("contact-form").innerHTML = "<p>Thanks for your message! We will be in touch soon.</p>";

        console.log("sent");
    } else {
        // Didn't work
        formEl.reset(); //reset form
        grecaptcha.reset(); //reset google recaptcha
        document.getElementById("contact-form").innerHTML = "<p>Your submission has failed. Please try again.</p>";
        console.log("failed");
    }
  });

  request.open(formEl.method, formEl.action);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(getFormDataString(formEl));
});

});