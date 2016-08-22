(function() {
    var angular = require('angular');
    var app = angular.module('basic-view', []);


    app.directive('basicView', function() {
        return {
            restrict: 'E',
            templateUrl: '/views/basic.html',
            controller: ['$http', function($http) {
                var Person = this;
                person = [];
                $http.get('data.json').success(function(data) {
                    Person.person = data;
                });
                this.rw_status = true;
                this.changeRwStatus = function(status) {
                    if (status === true) {
                        this.rw_status = false;
                        document.getElementById("btn1").innerHTML = "Save";
                    } else {
                        this.rw_status = true;
                        document.getElementById("btn1").innerHTML = "Change";
                    }
                };
            }],
            controllerAs: 'staff'
        }
    });
})();
