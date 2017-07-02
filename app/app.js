'use strict';
(function() {

  var config = {
    apiKey: "AIzaSyBFq-50HJAtT4rRSvHTT6JPGamYMEdYD6M",
    authDomain: "assignment1-6e260.firebaseapp.com",
    databaseURL: "https://assignment1-6e260.firebaseio.com",
    projectId: "assignment1-6e260",
    storageBucket: "assignment1-6e260.appspot.com",
    messagingSenderId: "353722575237"
  };
  firebase.initializeApp(config);

  // Declare app level module which depends on views, and components
  angular.module('myApp', ['ngRoute', 'myApp.view', 'myApp.home', 'myApp.claim', 'myApp.services', 'ngNotify'])
    .config(['$locationProvider', '$routeProvider',
      function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
          .when('/home', {
            templateUrl: 'views/home/home.html',
            controller: 'HomeCtrl'
          })
          .when('/claim', {
            templateUrl: 'views/claim/form.html',
            controller: 'claimCtrl'
          })
          .when('/view', {
            templateUrl: 'views/view/all.html',
            controller: 'ViewAllCtrl'
          })
          .otherwise({
            redirectTo: '/home'
          });
      }
    ])
    /* start of mainCtrl*/
    .controller('mainCtrl', ['$scope', 'authService', 'ngNotify', '$location',
      function($scope, authService, ngNotify, $location) {

        ngNotify.set('Welcome.. Initializing app..', 'info');

        authService.auth.$onAuthStateChanged(function(authData) {
          if (authData != null) {
            var userData = authService.setUserData(authData);
            ngNotify.set('Welcome ' + userData.displayName, 'info');
          }
        });

        $scope.getRoute = function(path) {
          return ($location.path().substr(0, path.length) === path) ? 'active' : '';
        };

        $scope.signOut = function() {
          authService.auth.$signOut();
          authService.removeUserData();
          $location.path('/home');
        };

      }
    ]); /* end of mainCtrl*/



}());
