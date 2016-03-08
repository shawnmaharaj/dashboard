'use strict';

/**
 * @ngdoc overview
 * @name dashboardOncorpApp
 * @description
 * # dashboardOncorpApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardOncorpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'gridster',

    'nvd3'
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
      .when('/graph', {
        templateUrl: 'views/graph.html',
        controller: 'GraphCtrl',
        controllerAs: 'graph'
      })
      .when('/collision', {
        templateUrl: 'views/collision.html',
        controller: 'CollisionCtrl',
        controllerAs: 'collision'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).controller('HeaderController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  });
