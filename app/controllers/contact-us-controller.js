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
            $rootScope.message = "<p>Thanks! Data send successfully!(email: " + JSON.stringify($scope.contactData.email) + ", message: \""+JSON.stringify($scope.contactData.message)+"\")";
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