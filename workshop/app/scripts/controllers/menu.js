"use strict";

/**
 * Created by rockerfeler on 9/19/16.
 */

angular.module("workshop").controller("MenuCtrl", [
  "$scope", "MenuService",
  function($scope, MenuService) {
    $scope.listaMenu = MenuService.getMenuSuperior();
}]);
