'use strict';

angular.module('myApp.view', ['ngRoute', 'firebase'])

  // view controller
  .controller('ViewAllCtrl', ['$scope', '$firebaseArray',
    function($scope, $firebaseArray) {
      var ref = firebase.database().ref().child('list');
      $scope.claims = $firebaseArray(ref);
      // putting a console.log here won't work, see below



    }
  ]);
