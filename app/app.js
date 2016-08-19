var app = angular.module("animalApp", ['ngRoute']);


app.run(function($rootScope) {
    /* message for modal window */
    $rootScope.message = "test message";
})


app.config(function($routeProvider, $locationProvider) {

    $routeProvider.when("/cats", {
            templateUrl: "app/views/catView.html",
            controller: ""
        })
        .when("/dogs", {
            templateUrl: "app/views/dogView.html",
            controller: ""
        })
        .when("/horses", {
            templateUrl: "app/views/horseView.html",
            controller: ""
        })
        .when("/contact-us", {
            templateUrl: "app/views/contactUs.html",
            controller: "ContactUsController"
        })
        .otherwise({
            redirectTo: '/cats'
        });
});

app.run(function($rootScope) {
    document.addEventListener("click", function(e) {
        $rootScope.$broadcast("documentClicked", e.target);
    });
});