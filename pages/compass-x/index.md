---
title: 'CompassX'
sub_title: ''
header_image: /assets/images/ccc-rockstars-final-final.jpg
search_engine_optimization:
  page_title: CompassX
  page_description: 
permalink: /compass-x/
layout: page
iframe:
  title: ''
  url: ''
  width: '2000'
  height: '1300'
stripe:
  price: '50000'
  button_label: 'Pay $500.00 for CompassX'
  description: 'CompassX'
  public_key: 'pk_test_j1uzibEQwCYG287YFYHKvtiz'
  success_message: 'Thank you for your payment.'
  failure_message: 'There was an issue with your payment. Please try again or contact us for help.'
  
---
Coming Soon

<!--<div id="card-element"></div>-->
<style>
.stripe-button-el {
    background-image: none !important;
    background-color: #f8f8f8 !important;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;
}
</style>
<form action="https://wt-bbb812ec6f1b786e8adf620306562f3c-0.run.webtask.io/stripe-payment?currency=USD&amount={{page.stripe.price}}&description={{page.stripe.description}}" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="{{page.stripe.public_key}}"
    data-amount="{{page.stripe.price}}"
    data-name="Compass Community Collaborative School"
    data-description="{{page.stripe.description}}"
    data-label="{{page.stripe.button_label}}"
    data-zip-code="true"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto"
    data-allow-remember-me="false">
  </script>
</form>
<!--<script src="https://js.stripe.com/v3/"></script>-->

<div id="stripe-message-success">{{page.stripe.success_message}}</div>
<div id="stripe-message-fail">{{page.stripe.failure_message}}</div>

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.js"></script>
<script>
function queryString() {
  var queryString = window.location.search;
  var varArray = queryString.split("&");
  for (var i = 0; i < varArray.length; i++) {
    var param = varArray[i].split("=");
    return param[1];
  }
};

//if ($('body').hasClass("contact")) {
  if (queryString() == "200") {
    $('#stripe-message-success').show();
    $('#stripe-message-fail').hide();
    console.log("200");
  } else if (queryString() == "400") {
    $('#stripe-message-success').hide();
    $('#stripe-message-fail').show();
    console.log("400");
  } else {
    $('#stripe-message-success').hide();
    $('#stripe-message-fail').hide();
    console.log("hide");
  }
//};

</script>
