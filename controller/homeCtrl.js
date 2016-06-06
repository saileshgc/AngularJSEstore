angular
	.module('myStore')
	.controller('homeCtrl',['$scope','products',function($scope,products){
		$scope.title = "Home";
		$scope.products = products; 
	}]);