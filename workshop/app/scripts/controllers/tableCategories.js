/**
 * Created by rockerfeler on 9/19/16.
 */

angular.module('workshop').controller('TableCategoriesCtrl', [
  "ProductoService", "$scope", "$http", "$q", "$stateParams", "$log",
  function(ProductoService, $scope, $http, $q, $stateParams, $log) {
    $scope.offset = 0;

    $scope.totalPage = function() {
      return new Array(4);
    };

    var promise = $http.get($stateParams.idCategory, {
      params: {
        "limit": 15,
        "offset": $scope.offset
      }
    });

    $scope.modal = function(id) {

                      var respuesta = ProductoService(id, $http, $q);

                      $log.debug(rspuesta);
                  };




    $scope.cambiaPagina = function (index) {
      $scope.offset = 15*index;

      promise = $http.get($stateParams.idCategory, {
        params: {
          "limit": 15,
          "offset": $scope.offset
        }
      });

      promise.then(function(response) {
        $scope.listaArticulos = response.data.results;
      });
    };

    promise.then(function(response) {
      $scope.listaArticulos = response.data.results;
    });
  }
])
