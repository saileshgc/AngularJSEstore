angular.module('myStore',[
	'ui.router'
	])
	.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home',{
				url:'/',
				templateUrl:'templates/home.html',
				controller: 'homeCtrl',
				resolve: {    //process this before loads up the controller
					products: ['$http',function($http){
						return $http.get('api/products.json').then(function(response){
							return response.data;
						})
					}]
				}
			})		
			.state('productgallery',{
				url:'/productgallery/:productID',
				templateUrl:'templates/product-gallery.html',
				controller:'productgalleryCtrl',
				resolve: {    //process this before loads up the controller
					products: ['$http',function($http){
						return $http.get('api/products.json').then(function(response){
							return response.data;
						})
					}]
				}
			})
			.state('product',{
				url:'/product/:productID/:itemID',
				templateUrl:'templates/product.html',
				controller:'productCtrl',
				resolve: {    //process this before loads up the controller
					products: ['$http',function($http){
						return $http.get('api/products.json').then(function(response){
							return response.data;
						})
					}]
				}
			})
			.state('about',{
				url:'/about',
				templateUrl:'templates/about.html',
				controller:'aboutCtrl'
			})
			.state('contact',{
				url:'/contact-us',
				templateUrl:'templates/contact-us.html',
				controller:'contactusCtrl'
			})
	}]);
