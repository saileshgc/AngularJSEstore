angular.module('myStore')
		.controller('productgalleryCtrl',['$scope','$stateParams','products',function($scope,$stateParams,products){
		$scope.title="Products Gallery";
		$scope.id = $stateParams.productID; //for productgallery/1
		$scope.products = products.filter(function(item){
				return item.id == $scope.id;
		}); 
		console.log($scope.products);
	}]);