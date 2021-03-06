var angular = require('angular');

var app = angular.module('demoApp', [ 'basic-view' ]);

var person = [{
    name: "Andrew",
    last: "Tattersall",
    DOB: "1979/05/21",
    gender: "Male",
    Address: {
        street: "Talbot Trail",
        number: "9016",
        City: "Blenheim"
    }
}, {
    name: "Sarah",
    last: "Evans",
    DOB: "1974/05/21",
    gender: "Female",
    Address: {
        street: "Talbot Trail",
        number: "9016",
        City: "Blenheim"
    }
}];

app.controller('appController', function() {
    this.people = person;
    this.newPerson = {};
    this.tab = 0;
    this.isSet = function(tabVal) {
        if (tabVal === this.tab) {
            return true;
        }
    };
    this.setTab = function(newTab) {
        if (!newTab) {
            this.tab = 0;
        } else {
            this.tab = newTab;
        }
    };
    this.addPerson = function() {
    };
});

app.controller('basicController', function() {

});

app.controller('addrController', function() {

});

app.controller('createController', ['$scope', function($scope) {
    this.employee = {};
    $scope.employee = {
        DOB: new Date(2013, 9, 22)
    };
    this.addEmployee = function(emplList) {

    };
}]);
