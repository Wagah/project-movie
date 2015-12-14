'use strict';

/**
 * @ngdoc function
 * @name movieHubApp.controller:ViewmovieCtrl
 * @description
 * # ViewmovieCtrl
 * Controller of the movieHubApp
 */
 //Route parameter is a service which is provided to receive id of the movie. 
 //The inject the factory(service), myfactory for injecting, scope is used to map 
 //the object. params is used to receive the route parameter
angular.module('movieHubApp')
  .controller('ViewmovieCtrl', function ($scope,$routeParams,myFactory) {
  		$scope.movie_id = $routeParams._id;
    	myFactory.get({id: $scope.movie_id}, function(response){
    		//here we parse a movie id and get a response -object
    		$scope.movies = response;

    	});
  });
