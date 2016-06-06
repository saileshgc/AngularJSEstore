angular.module('myStore')
		.controller('productCtrl',['$scope','$stateParams','$filter','products',function($scope,$stateParams,$filter,products){
		$scope.title="Product Gallery";
		$scope.id = $stateParams.productID; //for productgallery/1
		$scope.pid = $stateParams.itemID; //for productgallery/1
		$scope.products = products.filter(function(item){
				return (item.id == $scope.id);
		}); 
//Getting Single Item
		var showItem = $filter('filter')($scope.products[0].products, { pid: $scope.pid });
		$scope.item = showItem && showItem.length ? showItem[0] : null;
	}]);