"use strict";

/**
 * Created by rockerfeler on 9/19/16.
 */

angular.module("workshop").controller("HomeCategoriesCtrl", [
  "$scope", "$stateParams", "CategoriaServices",
  function($scope, $stateParams, CategoriaServices) {
    var categorias = CategoriaServices.getCategorias();
    $scope.categoria = categorias[$stateParams.idCategory];
  }
]);
