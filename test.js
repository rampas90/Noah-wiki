function person(firstname, lastname) {
  var fullname = firstname + " " + lastname;

  this.getfirstname = function() {return firstname};
  this.getlastname = function() {return lastname};
  this.getfullname = function() {return fullname};
}

var aPerson = new person("Mark", "S");

aPerson.eat = function() {
  return 'food';
}

console.log(aPerson);
console.log(aPerson.getfirstname());
aPerson.firstname = "Penny";

console.log(aPerson);
console.log(aPerson.getfirstname());
