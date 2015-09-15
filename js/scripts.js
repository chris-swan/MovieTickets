function Ticket(movieTitle, showing, age) {
  this.movieTitle = movieTitle;
  this.showing = showing;
  this.age = age;
};

Ticket.prototype.calculatePrice = function() {
  var basePrice = 15;
  var movieName = this.movieTitle;
  var movieArray = ["Jurassic World", "Star Wars", "Superman vs Batman"];
  if (movieArray.indexOf(movieName) != -1) {
    var titlePrice = basePrice + 3;
  } else {
    var titlePrice = basePrice;
  }

  if (this.age <= 12 || this.age >= 65) {
    var agePrice = titlePrice -5;
  } else {
    var agePrice = titlePrice;
  }

  if (this.showing <= 17) {
    var showTimePrice = agePrice - 5;
  } else {
    var showTimePrice = agePrice;
  }

  return showTimePrice;
}


$(document).ready(function() {

  $("form#movie-selection").submit(function(event) {
    event.preventDefault();


    var inputtedTitle = $("#movieTitle").val();
    var inputtedShowing = parseInt($("#showing").val());
    var inputtedAge = parseInt($("input#age").val());


    var newTicket = new Ticket(inputtedTitle, inputtedShowing, inputtedAge);
    var ticketPrice = newTicket.calculatePrice();

    $(".price").text("$" + ticketPrice);


});

});
