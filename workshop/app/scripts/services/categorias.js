"use strict";

/**
 * Created by rockerfeler on 9/19/16.
 */

angular.module('workshop').service('CategoriaServices', [function() {
  this.getCategorias = function() {
    return {
      MLU5725: "Accesorios para vehículos",
      MLU1540: "Servicios"
    };
  };
}]);
