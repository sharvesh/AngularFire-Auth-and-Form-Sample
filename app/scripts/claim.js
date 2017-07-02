'use strict';

angular.module('myApp.claim', ['ngRoute', 'firebase', 'ui.bootstrap'])

  // Home controller
  .controller('claimCtrl', ['$scope', 'ngNotify', '$firebaseArray', 'claimService', '$uibModal', '$rootScope', '$location',
    function($scope, ngNotify, $firebaseArray, claimService, $uibModal, $rootScope, $location) {
      $scope.alphaNumeric = "[\\w\\-'\\s]+";
      $scope.form = {
        submissionDate: new Date(),
        list: []
      };
      $scope.addName = function() {
        if (!angular.isDefined($scope.form.name) || $scope.form.name == null || $scope.form.name == "") {
          $scope.form.name = angular.copy($rootScope.userData.displayName.toUpperCase());
        }
      };
      $scope.send = function() {
        $scope.form.submissionDate = $scope.form.submissionDate.toLocaleDateString();
        $scope.form.timeStamp = new Date().toLocaleString(); // get current timestamp
        $scope.form.user = {
          displayName: $rootScope.userData.displayName,
          uid: $rootScope.userData.uid
        };
        claimService.add($scope.form).then(function(response) {
          var id = response.key;
          ngNotify.set('Claim submitted ;) yout Id is ' + id, 'success');
          $location.path("/view");
          // returns location in the array
        }, function(err) {
          console.log(err);
          ngNotify.set('ops there was an err, check console ', 'error');
        });
      };

      $scope.add = function() {
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'views/claim/subForm.html',
          controller: 'subClaimFormCtrl',
          controllerAs: '$ctrl',
          size: 'lg'
        });
        modalInstance.result.then(function(result) {
          if (!angular.isDefined($scope.form.list)) {
            $scope.form.list = [];
          }
          $scope.form.list.push(result)
          ngNotify.set('Expenses record added into list ;)', 'success');
        }, function(close) {
          ngNotify.set('Nothing was added :(', 'warn');
        });
      };

      $scope.remove = function(index) {
        $scope.form.list.splice(index, 1);
      };


    }
  ])
  .controller('subClaimFormCtrl', ['currencyData', '$uibModalInstance', '$filter',
    function(currencyData, $uibModalInstance, $filter) {

      var $ctrl = this;
      var today = new Date();
      /* the subform model init */
      $ctrl.claim = {
        date: angular.copy(today),
        currency: "MYR",
        exchangeRate: 1.00
      };
      $ctrl.currencyList = currencyData;
      // date picker init
      $ctrl.dateOptions = {
        dateDisabled: false,
        formatYear: 'yy',
        maxDate: new Date(),
        minDate: new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()),
        startingDay: 1
      };
      $ctrl.format = 'dd-MMMM-yyyy';
      $ctrl.calender = {
        opened: false
      };
      // end date pickers init
      $ctrl.totalSum = function() {
        if ($ctrl.claim.currency == "MYR" && $ctrl.claim.exchangeRate != "1.00") {
          // if someone tries to be smart by changing the currency then change the exchange rate and change back to default MYR
          $ctrl.claim.exchangeRate = 1.00;
        }
        if ($ctrl.subFrom.amount.$valid && $ctrl.subFrom.gst.$valid && $ctrl.subFrom.exchangeRate.$valid) {
          $ctrl.claim.total = ($ctrl.claim.amount + $ctrl.claim.gst) * $ctrl.claim.exchangeRate;
          //$ctrl.claim.total = $filter('number')(total, 2)
        }

      };
      $ctrl.add = function() {
        $ctrl.claim.date = $ctrl.claim.date.toLocaleDateString();
        $uibModalInstance.close($ctrl.claim);
      };
      $ctrl.cancel = function() {
        $uibModalInstance.dismiss('cancel');
      };

    }
  ]); // controller
