'use strict';

angular.module('myApp.home', ['ngRoute', 'firebase'])

  // Home controller
  .controller('HomeCtrl', ['$scope', 'authService', 'ngNotify',
    function($scope, authService, ngNotify) {
      $scope.login = {};
      console.log("Home Ctrl init.");
      //  var firebaseObj = new Firebase("assignment-1-42fe0.firebaseapp.com");
      //var loginObj = $firebaseSimpleLogin(firebaseObj);

      var loginSuccessHandler = function(response) {
        $scope.showForm = false;
        console.log("Signed in as:", response);
      };
      var loginErrHandler = function(err) {
        console.error("Authentication failed:", err);
        ngNotify.set(err.message, 'error');
      }

      $scope.signIn = function(provider) {
        delete $scope.error;
        if (provider == 'email') {
          console.log($scope);
          authService.auth.$signInWithEmailAndPassword($scope.login.username, $scope.login.pass)
            .then(loginSuccessHandler).catch(loginErrHandler);
        } else {
          authService.auth.$signInWithPopup(provider)
            .then(loginSuccessHandler).catch(loginErrHandler);
        }
      }



    }
  ]);
