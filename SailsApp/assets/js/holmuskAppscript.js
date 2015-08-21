var demoApp = angular.module('holmuskApp',[]);
	
	demoApp.controller('searchController', function ( $scope , $http) {
		$scope.foodItems = [
							{ name:'Burger', nutritionInfo:{}},
							{ name:'Cherry', nutritionInfo:{}}
							];

		
		$scope.clicktext = "before clicked";

		$scope.url = "http://test.holmusk.com/food/search?q=";
		$scope.nutri = "";
		$scope.giveMeNutritientsInfo = function(fooditem){			
			console.log(fooditem);
			$scope.nutri = fooditem;
		};

		$scope.searchme =  function(food){

			$scope.clicktext = $scope.url + food;
			$http.get($scope.url + food).
			  then(function(response) {
			  	
			  	var foodnames = response.data.map(function(obj){

			  		var tempObj = obj.portions;
			  				  		
			  		return {
			  			'name': obj.name,
			  			'nutritionInfo':tempObj
			  		};
			  	});

			  	 $scope.foodItems = foodnames;			  
			  	
			  	$scope.clicktext = foodnames;
			    			  
			  }, function(response) {
			  	
			  });

		};
		}
	);