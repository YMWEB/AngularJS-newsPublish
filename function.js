var test = angular.module('test',[]);
test.controller('myController',['$scope',function($scope){	

	$scope.person = {name:"your name"};
	var updateClock = function(){
		$scope.clock = new Date();
	};
	var timer = setInterval(function(){
		$scope.$apply(updateClock);
	},1000);
	


}]);
