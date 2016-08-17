var app = angular.module("animalApp", ['ngRoute']); 

app.config(function($routeProvider, $locationProvider){
    
    
    $routeProvider.when("/cats",
        {
            templateUrl: "app/views/catView.html",
            controller: ""
        }
    )
    .when("/dogs",
        {
            templateUrl: "app/views/dogView.html",
            controller: ""
        }
    )
    .when("/horses",
        {
            templateUrl: "app/views/horseView.html",
            controller: ""
        }
    )
    .when("/contact-us",
        {
            templateUrl: "app/views/contactUs.html",
            controller: ""
        }
    )
    .otherwise({
        redirectTo: '/cats'
    });
});



app.controller("NavigationController", function NavigationController($scope, $location) {

/* function to check current path */
 $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    
});