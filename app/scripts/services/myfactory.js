'use strict';

/**
 * @ngdoc service
 * @name movieHubApp.myFactory
 * @description
 * # myFactory
 * Factory in the movieHubApp.
 */
angular.module('movieHubApp')
  .factory('myFactory', function ($resource) {
    //$resource would communicate with http,
    return $resource("http://127.0.0.1:8082/movies/:id",{id:'@_id'},
    {

    	update : {
    		method : 'PUT'
    	}
    	
    		   		
    

    	});



  });
