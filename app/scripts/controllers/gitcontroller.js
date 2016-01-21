'use strict';

/**
 * @ngdoc function
 * @name anguGhApp.controller:GitcontrollerCtrl
 * @description
 * # GitcontrollerCtrl
 * Controller of the anguGhApp
 */
angular.module('anguGhApp')
  .controller('GitcontrollerCtrl', function ($scope, $http, $stateParams, $location, $state) {

    $scope.submit = function(){
      $location.path('detailUser/' + $scope.username);
      //$state.go('detailUser({username = '+ $scope.username + '})');
    }

    $scope.submitForm = function(){
      console.log($scope.username);

      $http.get('https://api.github.com/users/' + $scope.username).then(function successCallback(res){
        $scope.userInfos = res.data;
      }, function errorCallBack(res){
        console.log("Echec à l'affichage : " + res.data.statusText);
      });

      $http.get('https://api.github.com/users/' + $scope.username + '/repos').then(function successCallback(res){
        $scope.repos = res.data;
        $scope.username = '';
      }, function errorCallBack(res){
        console.log("Echec à l'affichage : " + res.data.statusText);
      });
    }
  });
