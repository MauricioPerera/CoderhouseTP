"use strict";
/**
 * Created by rockerfeler on 9/19/16.
 */

angular.module("workshop").filter('accentsToHtml', [function() {
  return function(value) {
    value
      .replace(/á/g, '&aacute;')
      .replace(/é/g, '&eacute;')
      .replace(/í/g, '&iacute;')
      .replace(/ó/g, '&oacute;')
      .replace(/ú/g, '&uacute;')
      .replace(/ñ/g, '&ntilde;');

    return value;
  };
}]);
