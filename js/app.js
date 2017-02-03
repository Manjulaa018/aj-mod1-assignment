(function(){
'use strict';

angular.module("LunchCheck",[])
.controller("LunchCheckController",LunchCheckController);

LunchCheckController.$inject = ["$scope"];

function LunchCheckController($scope){
  $scope.message = "",$scope.lunchMenu="";

  $scope.checkLunchMenu = function(){
    var lunchList = $scope.lunchMenu.split(',').filter(function(a){return a.trim()!==''});

    if($scope.lunchMenu == null || $scope.lunchMenu == ''
          || lunchList.length == 0){
      $scope.message = "Please enter data first";
      $scope.msgClass = "error";
      $scope.menuClass = "errorBroder";
    }
    else if(lunchList.length > 0 && lunchList.length <=3 ){
      $scope.message = "Enjoy!";
      $scope.msgClass = "valid";
      $scope.menuClass = "validBroder";
    }
    if(lunchList.length > 3 ){
      $scope.message = "Too much!";
      $scope.msgClass = "valid";
      $scope.menuClass = "validBroder";
    }
  }
}
})();
