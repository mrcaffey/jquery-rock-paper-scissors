
//Variables
//Functions
//Listeners




//Variables
//Functions
//Listeners


$(document).ready( function() {
  // Value hash
  var values = {
    monthly: '$10 /mo',
    quarterly: '$9 /mo',
    yearly: '$7 /mo'
  }

  var $plan = $('#plan')
  var $price = $('#price')

  //Find the plan select
  //Listen for a change
  $plan.on('change', function() {
    // set text to values['monthly']
    $price.text(values[this.value])
  })

  // find add button
  // listen for a click
  $('#add').on('click', function() {
    var installment = $plan.val()
    // figure out the price
    var price = $price.text()
    // find our cart
    var inCart = $('#in_cart')
    // add an entry to cart
    inCart.append('<li>' + installment + ' - ' + price + '</li>')
  })
})