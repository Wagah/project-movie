'use strict';

/**
 * @ngdoc function
 * @name movieHubApp.controller:EditmovieCtrl
 * @description
 * # EditmovieCtrl
 * Controller of the movieHubApp
 */

angular.module('movieHubApp')
  .controller('EditmovieCtrl', function ($scope, $routeParams, myFactory) {
    $scope.movie_id = $routeParams._id //receive the route parameter

    myFactory.get({_id: $scope.movie_id}, function(response){
    		//here we parse a movie id and get a response -object
    		$scope.movies = response;

    	});
    //update button clicked
    $scope.updateMovie = function(){
    	myFactory.update($scope.movies ,function (response)
    		{
    			//redirect -dialog
    			alert("Record Updated" + response);

    		});
        // Delete function


    };

  });

