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
---
Coming Soon

<!--<div id="card-element"></div>-->

<form action="https://wt-bbb812ec6f1b786e8adf620306562f3c-0.run.webtask.io/stripe-payment?currency=USD&amount=500&description=CompassX" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_j1uzibEQwCYG287YFYHKvtiz"
    data-amount="500"
    data-name="Compass Community Collaborative School"
    data-description="CompassX"
    data-zip-code="true"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto"
    data-allow-remember-me="false">
  </script>
</form>

<!--<form  -->
<!--  method="POST"-->
<!--  action="https://wt-bbb812ec6f1b786e8adf620306562f3c-0.run.webtask.io/test">-->
<!--  <script-->
<!--    src="https://checkout.stripe.com/checkout.js"-->
<!--    class="stripe-button"-->
<!--    data-key="pk_test_j1uzibEQwCYG287YFYHKvtiz"-->
<!--    and-other-stuff>-->
<!--  </script>-->
<!--</form>-->


<!--<form action="https://wt-bbb812ec6f1b786e8adf620306562f3c-0.run.webtask.io/test" method="POST">-->
<!--  <script-->
<!--    src="https://checkout.stripe.com/checkout.js" class="stripe-button"-->
<!--    data-key="pk_test_j1uzibEQwCYG287YFYHKvtiz"-->
<!--    data-name="Compass School"-->
<!--    data-description="CompassX"-->
<!--    data-amount="199"-->
<!--    data-locale="auto"-->
<!--    data-panel-label="Pay for CompassX"-->
<!--    data-label="Pay for CompassX"-->
<!--    data-allow-remember-me="false">-->
<!--  </script>-->
<!--</form>-->




<!--<button class="pay">Pay</button>-->

<!--<script src="https://checkout.stripe.com/checkout.js">-->
<!--<script>-->
<!--    var handler = StripeCheckout.configure({-->
<!--      key: window.pk_live_nl5PAwGu1qrf1GvfBwUgI6iR,-->
<!--      image: 'https://yourlogo.png',-->
<!--      locale: 'auto',-->
<!--      token: function(token) {-->
<!--        $('.pay').prop("disabled", true);-->
<!--        $('.pay').text('Paying...')-->
<!--        $.ajax({-->
<!--            url: 'https://wt-bbb812ec6f1b786e8adf620306562f3c-0.run.webtask.io/test',-->
<!--            type: 'POST',-->
<!--            data: {-->
<!--              stripeToken: token.id-->
<!--            }-->
<!--        }).then(function(stripeCustomer) {-->
<!--          console.log('success');-->
<!--        }).fail(function(e) {-->
<!--          $('.pay').text('Buy');-->
<!--          alert('There was an error processing the payment. Please try again.')-->
<!--        });-->
<!--      }-->
<!--    });-->
    
<!--    $(function() {-->
<!--      $('.pay').on('click', function(e) {-->
<!--        e.preventDefault();-->
<!--        handler.open({-->
<!--          name: 'Title',-->
<!--          description: 'My Subscription',-->
<!--          panelLabel: "Subscribe",-->
<!--          amount: 900, -->
<!--          email: 'default_email_if_you_have_it',-->
<!--          allowRememberMe: false-->
<!--        });-->
<!--      });-->
<!--    });-->
    

<!--    $(window).on('popstate', function() {-->
<!--      handler.close();-->
<!--    });-->
<!--</script>-->



<script src="https://js.stripe.com/v3/"></script>

<script>
// var stripe = Stripe('pk_live_nl5PAwGu1qrf1GvfBwUgI6iR');

// var elements = stripe.elements();

// var card = elements.create('card');

// card.mount('#card-element');

</script>