app.directive('contactUs', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'app/views/contactDirective.html',
        link: function($scope, elem, attr, ctrl) {
            //console.log($scope);
        }
    };
});