app.controller("MenuController", ['$scope', '$rootScope', function($scope, $rootScope) {
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
}]);