
$(document).ready( function() {
  var userChoice = ''
  var compChoice = ''
  var compOptions = ['rock', 'paper', 'scissors']
  var wins = 0
  var losses = 0
  var ties = 0
  
  $('#rock').on('click', function() {
    userChoice = 'rock'
    compChoice = compOptions[Math.floor(Math.random() * compOptions.length)]
    evalGame(userChoice, compChoice)
  })

  $('#paper').on('click', function() {
    userChoice = 'paper'
    compChoice = compOptions[Math.floor(Math.random() * compOptions.length)]
    evalGame(userChoice, compChoice)
  }) 

  $('#scissors').on('click', function() {
    userChoice = 'scissors'
    compChoice = compOptions[Math.floor(Math.random() * compOptions.length)]
    evalGame(userChoice, compChoice)
  })

  $('#reset').on('click', function() {
    wins = 0
    losses = 0
    $('#Wins').text('Your Score ' + wins)
    $('#Losses').text('Computer Score ' + losses)
    $('#Ties').text('Your Score ' + ties)
  })

  function evalGame(userChoice, compChoice) {
    if (userChoice === 'rock' && compChoice === 'scissors' || 
    userChoice === 'paper' && compChoice === 'rock' ||
    userChoice === 'scissors' && compChoice === 'paper'){
      alert('You Win!')
      wins++
      $('#Wins').text('Your Score ' + wins)
    } else {
      alert('Loss!')
      losses++
      $('#Losses').text('Computer Score ' + losses)
    } elseif 
      alert('Its a tie!')
      ties++
      $('#Ties').text('Your Score ' + ties)
    }
  })
