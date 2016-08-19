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
app.directive("menu", function() {
				return {
					restrict: "E",
					template: "<div ng-class='{ show: visible, left: alignment === \"left\"}' ng-transclude></div>",
					transclude: true,
                    scope: {
                        visible: "=",
                        alignment: "@"
                    }
				};
			});
            
            app.directive("menuItem", function() {
                 return {
                     restrict: "E",
                     template: "<div ng-click='navigate()' ng-transclude></div>",
                     transclude: true,
                     scope: {
                         hash: "@"
                     },
                     link: function($scope) {
                         $scope.navigate = function() {
                             window.location.hash = $scope.hash;
                         }
                     }
                 }
            });
app.directive('contactUs', function($compile) {
    return {
        restrict: 'E',
        templateUrl: 'app/views/contactDirective.html',
        link: function($scope, elem, attr, ctrl) {
            //console.log($scope);
        }
    };
});
app.controller("NavigationController", function NavigationController($scope, $rootScope, $location) {

    /* function to check current path */
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };

});
			app.controller("MenuController", function($scope, $rootScope) {
			    $scope.leftVisible = false;

			    $scope.close = function() {
			        $scope.leftVisible = false;
			        $scope.rightVisible = false;
			    };

			    $scope.showMenu = function(e) {
			        $scope.leftVisible = true;
			        e.stopPropagation();
			    };

			    $rootScope.$on("documentClicked", _close);

			    function _close() {
			        $scope.$apply(function() {
			            $scope.close();
			        });
			    }
			});
app.controller("ContactUsController", function ContactUsController($scope, $rootScope) {

    $scope.contactData = {
        email: "",
        message: ""
    };

    /* function to check email  */

    $scope.validateEmail = function() {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test($scope.contactData.email);
    }

    /* function to check message length */
    $scope.checkMessage = function() {
        if ($scope.contactData.message.length < 10) {
            return false;
        }
        else {
            return true;
        }
    }

    $scope.testEmail = function() {
        if ($scope.validateEmail() && $scope.checkMessage()) {
            $rootScope.message = JSON.stringify($scope.contactData);
            document.getElementById('modal-window').show();
            document.getElementById('yes').setAttribute('disabled', "on");
        }
        else if ($scope.validateEmail() && !$scope.checkMessage()) {
            alert("Message is too short!");
        }
        else if (!$scope.validateEmail() && $scope.checkMessage()) {
            alert("Invalid email address! Please enter a valid email address.");
        }
        else {
            alert("Invalid data! Please enter a valid email and message!");
        }
    }

});
app.controller("DialogController", function DialogController($scope, $rootScope, $window) {

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
});
app.controller("FooterController", function FooterController($scope, $rootScope) {

    $scope.dialogWindow = angular.element(document.querySelector('#modal-window'));

    $scope.openHelp = function() {
        $rootScope.message = "Need help?";
        document.getElementById('modal-window').show();
        document.getElementById('yes').removeAttribute('disabled');
    }
});