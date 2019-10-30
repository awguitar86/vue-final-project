<template>
    <div id="stripe-element">
        <label for="card-element">Credit or Debit Card</label>
        <div id="card-element"></div>
        <div id="card-errors" role="alert"></div>
        <button>Submit Payment</button>
    </div>
</template>

<script src="https://js.stripe.com/v3/"></script>
<script>
let stripe = Stripe('pk_test_NZNKEJ2uh8QWu2Kapowd5thN00LHtHB7ma'),
    elements = stripe.elements(),
    card = undefined;
let style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};
export default {
    data() {
        return {
            stripeToken: ''
        }
    },
    mounted() {
        card = elements.create('card', {style: style});
        card.mount('#card-element');
    },
    purchase() {
        stripe.createToken(card).then(res => this.stripeToken = res);
    }
}
</script>

<style lang="scss" scoped>
    #stripe-element {
        width: 100%;
    }
    
</style>