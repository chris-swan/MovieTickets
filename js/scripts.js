function Ticket(movieTitle, showing, age) {
  this.movieTitle = movieTitle;
  this.showing = showing;
  this.age = age;
};

var basePrice = 15;
var calculatedPrice = 0;


Ticket.prototype.calculatePrice = function() {
  var basePrice = 15;
  if (this.age <= 12 || this.age >= 65) {
    var agePrice = basePrice -5;
  } else {
    var agePrice = basePrice;
  }

  if(this.showing <= 17) {
    var showTimePrice = agePrice - 5;
  } else {
    var showTimePrice = agePrice;
  }
  
  return showTimePrice;
}



var newTicket = new Ticket(movieTitle, showing, age);

Ticket.calculatePrice();

// $(document).ready(function() {
//
//   new Ticket = {movieTitle: inputtedTitle, showing: inputtedShowing, age: inputtedAge};
//
// });


// agePrice = (5(base)
// if     age>18 {
//   price - 5
// }
// age < 65
// price - 5
//
// showTimePrice =
//
// if show after 5, agePrice+5
//
// titlePrice =
// if movieTitle = new
// (showTimePrice+3)
