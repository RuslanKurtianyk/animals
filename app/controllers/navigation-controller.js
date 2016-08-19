app.controller("NavigationController", function NavigationController($scope, $rootScope, $location) {

    /* function to check current path */
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };

});