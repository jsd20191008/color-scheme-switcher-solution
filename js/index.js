$(document).ready(function () {
  $('#grayButton').click(() => {
    $('body').attr('class', 'gray')
  })

  $('#whiteButton').click(() => {
    $('body').attr('class', 'white')
  })

  $('#blueButton').click(() => {
    $('body').attr('class', 'blue')
  })

  $('#pinkButton').click(() => {
    $('body').attr('class', 'pink')
  })

  // 1) Add the code to accomodate using jQuery
  //    to make the other buttons work as expected

  // 2) Add two additional buttons

  // Extra Credit
  // - Add a link labeled "Show / Hide Buttons"
  // - When users click on the link the following should happen
  // -- if the buttons are showing, then pressing the link should Hide them
  // -- if the buttons are not showing, then pressing the link should Show them
  // -- Hint: Google is your friend
})
