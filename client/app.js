var angular = require('angular');

var app = angular.module('demoApp',[]);

var person = {
  name: "Andrew",
  last: "Tattersall",
  DOB: "1979/05/21",
  gender: "Male"
};

app.controller('appController', function(){
  this.people = person;
  this.calcAge = function(){
    var currDate = new Date();
    var bDate = new Date(people.DOB);
    var age = currDate - bDate;
    return age;
  }
})
