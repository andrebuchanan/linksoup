(function()
{
"use strict";

angular.module('linksoup.filters', []).
  //
  // Meh.
  filter("boolString", function()
  {
    return function(bool)
    {
      return bool ? "true" : "false";
    };
  });
})();
