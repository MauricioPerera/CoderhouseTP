"use strict";

/**
 * Created by rockerfeler on 9/19/16.
 */

angular.module('workshop').service('MenuService', [
  "CategoriaServices",
  function(CategoriaServices) {
    this.getMenuSuperior = function() {
      var categorias = CategoriaServices.getCategorias();
      var menuArray = [];

      for (var keyCategoria in categorias) {
        menuArray.push({
          name: categorias[keyCategoria],
          title: categorias[keyCategoria],
          url: "#/categories/" + keyCategoria
        });
      }

      return menuArray;
  };
}]);
