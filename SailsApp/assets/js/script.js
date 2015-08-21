var demoApp = angular.module('myApp',[]);

	// demoApp.config(function ($routeProvider){
	// 	$routeProvider
	// 		.when('/', {
	// 			controller: 'simpleController',
	// 			templateUrl: 'partials/NutritionInfo.ejs'
	// 		})
	// 		.when('/nutri', {
	// 			controller: 'simpleController',
	// 			templateUrl: 'partials/NutritionInfo.ejs'
	// 		})
	// 		.otherwiser({
	// 			redirectTo: '/' 
	// 		});
	// })

	demoApp.controller('simpleController', function ($scope) {
		$scope.customers = [
							{ name:'Bala', city:'Singapore'},
							{ name:'Prasanna', city:'Singapore'}
							];
	}
	);