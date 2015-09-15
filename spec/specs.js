describe('Ticket', function() {
  it("Retrieves movie title, showing and age", function() {
    var testTicket = new Ticket("Movie Title", 15, 20);
    expect(testTicket.movieTitle).to.equal("Movie Title");
    expect(testTicket.showing).to.equal(15);
    expect(testTicket.age).to.equal(20);
  });

  it("assigns a price based on age", function () {
    var testTicket = new Ticket("Movie Title", 15, 20);
    expect(testTicket.calculatePrice()).to.equal(10);
  });

  it("assigns a price for youth and seniors", function () {
    var testTicket = new Ticket("Movie Title", 15, 66);
    expect(testTicket.calculatePrice()).to.equal(5);
  });

  it("assigns a price based on age and movie time", function () {
    var testTicket = new Ticket("Movie Title",12, 66);
    expect(testTicket.calculatePrice()).to.equal(5);
  });

  it("assigns a price based on age, movie time and title", function () {
    var testTicket = new Ticket("StarWars",12, 66);
    expect(testTicket.calculatePrice()).to.equal(8);
  });

});
