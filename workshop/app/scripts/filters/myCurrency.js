"use strict";

/**
 * Created by rockerfeler on 9/19/16.
 */

angular.module("workshop").filter("myCurrency", [
  function() {
    return function(value, currency_id) {
      if (currency_id == "USD") {
        return "USD$" + value;
      } else {
        return "$" + value;
      }
    };
  }
]);
