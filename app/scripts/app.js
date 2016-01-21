'use strict';

/**
 * @ngdoc overview
 * @name anguGhApp
 * @description
 * # anguGhApp
 *
 * Main module of the application.
 */
angular
  .module('anguGhApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('accueil');
    $stateProvider.state('accueil', {
      url : '/accueil',
      templateUrl : 'views/main.html'
    });
    $stateProvider.state('about', {
      url : '/about',
      templateUrl : 'views/about.html'
    });

    $stateProvider.state('detailRepo', {
      url : '/detailRepo/:username?repo',
      templateUrl : 'views/detailrepo.html'
    });

    $stateProvider.state('detailUser', {
      url : '/detailUser/:username',
      templateUrl : 'views/detailuser.html'
    })


  });
