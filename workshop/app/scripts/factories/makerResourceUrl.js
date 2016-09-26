/**
 * Created by rockerfeler on 9/19/16.
 */

angular.module("workshop").factory("makerResourceUrl", [
  "$log", "CategoriaServices",
  function($log, CategoriaServices) {
    var listaCategorias = CategoriaServices.getCategorias();

    var urlInjector = {
      request: function(config) {
        if (listaCategorias[config.url]) {
          config.url = "https://api.mercadolibre.com/sites/MLU/search?category=" + config.url;
        }

        return config;
      }
    };

    return urlInjector;
  }
]);
