'use strict';

/**
 * @ngdoc overview
 * @name movieHubApp
 * @description
 * # movieHubApp
 *
 * Main module of the application.
 */
angular
  .module('movieHubApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/viewMovie/:_id', {
        templateUrl: 'views/viewmovie.html',
        controller: 'ViewmovieCtrl',
        controllerAs: 'viewMovie'
      })
      .when('/editMovie/:_id', {
        templateUrl: 'views/editmovie.html',
        controller: 'EditmovieCtrl',
        controllerAs: 'editMovie'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
