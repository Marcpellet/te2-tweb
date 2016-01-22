'use strict';

/**
 * @ngdoc function
 * @name anguGhApp.controller:GitcontrollerCtrl
 * @description
 * # GitcontrollerCtrl
 * Controller of the anguGhApp
 */
var appModule = angular.module('anguGhApp');
appModule.controller('GitcontrollerCtrl', function ($scope, $http, $stateParams, $location) {

    var credentials = "?client_id=a1ef22b884b1ed19ef7d&client_secret=3259d6f25c6f994b112d09620f54ed702dc16193";
    $scope.submit = function(){
      $scope.error='false';
      $http.get('https://api.github.com/users/' + $scope.username + credentials).then(function successCallback(res){
        $location.path('detailUser/' + $scope.username);
      }, function errorCallBack(res){
        $scope.error='true';
      });

      //$state.go('detailUser({username = '+ $scope.username + '})');
    }

  });

appModule.controller('DetailUserCtrl', function($scope, $http, $stateParams){
  $scope.username = $stateParams.username;
  var credentials = "?client_id=a1ef22b884b1ed19ef7d&client_secret=3259d6f25c6f994b112d09620f54ed702dc16193";
  console.log($scope.username);

  $http.get('https://api.github.com/users/' + $scope.username + credentials).then(function successCallback(res){
    $scope.userInfos = res.data;
  }, function errorCallBack(res){
    console.log("Echec à l'affichage : " + res.data.statusText);
  });

  $http.get('https://api.github.com/users/' + $scope.username + '/followers'+ credentials).then(function successCallback(res){
    $scope.followers = res.data;
  }, function errorCallBack(res){
    console.log("Echec à l'affichage : " + res.data.statusText);
  });

  $http.get('https://api.github.com/users/' + $scope.username + '/subscriptions' + credentials).then(function successCallback(res){
    $scope.repos = res.data;
    $scope.username = '';
  }, function errorCallBack(res){
    console.log("Echec à l'affichage : " + res.data.statusText);
  });
});


appModule.controller('DetailRepoCtrl', function($scope, $http, $stateParams){
  $scope.username = $stateParams.username;
  $scope.repo = $stateParams.repo;
  $scope.owner = $stateParams.owner;
  $scope.usernames = new Array();
  $scope.contributions = new Array();
  var credentials = "?client_id=a1ef22b884b1ed19ef7d&client_secret=3259d6f25c6f994b112d09620f54ed702dc16193";
  console.log($scope.username + " " + $scope.repo);

  $http.get('https://api.github.com/repos/'+  $scope.owner + '/' + $scope.repo + credentials).then(function successCallback(res){
    if(res.data.fork){
      $scope.repo = res.data.source;
    }else{
      $scope.repo = res.data;
    }
  }, function errorCallBack(res){
    console.log("Echec à l'affichage : " + res.data.statusText);
  });
  console.log('https://api.github.com/repos/'+  $scope.owner + '/' + $scope.repo + '/contributors' + credentials);
  $http.get('https://api.github.com/repos/'+  $scope.owner + '/' + $scope.repo + '/contributors' + credentials).then(function successCallback(res){
    $scope.contributors = res.data;

    for(var i = 0; i < res.data.length; i++){
      $scope.usernames.push(res.data[i].login);
      $scope.contributions.push(res.data[i].contributions);
    }
    console.log("nb contributors " + $scope.contributors.length);
  }, function errorCallBack(res){
    console.log("Echec à l'affichage : " + res.data.statusText);
  });

})
