/**
 * Created by rockerfeler on 9/19/16.
 */

angular.module("workshop").filter("listingType", [
  function() {
    return function(value) {
      var listing_type = {
        "gold": "Oro",
        "gold_premium": "Oro premium",
        "gold_special": "Oro profesional",
        "silver": "Plata",
        "bronze": "Bronze",
        "free": "Gratuita"
      };

      return listing_type[value];
    }
  }
])
