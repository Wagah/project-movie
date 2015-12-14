'use strict';

/**
 * @ngdoc function
 * @name movieHubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieHubApp
 */
angular.module('movieHubApp')
  .controller('MainCtrl',function ($scope,myFactory) {
    //passes a get to your resource
  	$scope.movies = myFactory.query();
  });
