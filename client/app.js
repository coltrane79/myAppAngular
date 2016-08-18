var angular = require('angular');

var app = angular.module('demoApp',[]);

var person = {
  name: "Andrew",
  last: "Tattersall",
  DOB: "1979/05/21",
  gender: "Man",
  Address: {
    street: "Talbot Trail",
    number: "9016",
    City: "Blenheim" }
};

app.controller('appController', function(){
  this.people = person;
  this.tab = 0;
  this.isSet = function(tabVal){
    if(tabVal === this.tab){
      return true;
    }
  };
  this.setTab = function(newTab){
    if(!newTab){
      this.tab = 0;
    }
    else {
      this.tab = newTab;
    }
  };
});

app.controller('basicController', function(){
  
});
