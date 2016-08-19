app.controller("DialogController", ['$scope','$rootScope','$window',function DialogController($scope, $rootScope, $window) {

    $scope.getMessage = function() {
        return $rootScope.message;
    };

    $scope.closeDialog = function() {
        document.getElementById('modal-window').close();
        console.log("Help is not needed.");
    }

    $scope.toHelp = function() {
        document.getElementById('yes').removeAttribute('disabled');
        document.getElementById('modal-window').close();
        $window.open('https://github.com/RuslanKurtjanyk/animals', '_blank');
    }
}]);