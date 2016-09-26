'use strict';

/**
 * Created by rockerfeler on 9/19/16.
 */

angular.module('workshop').config([
  "$stateProvider", "$urlRouterProvider", "$httpProvider",
  function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/views/home.html'
      })
      .state('categories', {
        url: '/categories/:idCategory',
        views: {
          '': {
            templateUrl: '/views/categories-home.html',
            controller: 'HomeCategoriesCtrl'
          },
          'table@categories': {
            templateUrl: '/views/partials/_table-data.html',
            controller: 'TableCategoriesCtrl'
          },
          'modal@categories': {
            templateUrl: '/views/partials/_modal-product-data.html',
            controller: 'TableCategoriesCtrl'
          },
          'table@categories': {
            templateUrl: '/views/partials/_table-data.html',
            controller: 'TableCategoriesCtrl'
          },
          'carusel@categories': {
            templateUrl: '/views/partials/_carusel-modal-product-data.html',
            controller: 'TableCategoriesCtrl'
          },
        }
      });

    $urlRouterProvider.otherwise("/");

    $httpProvider.interceptors.push("makerResourceUrl");
}]);
