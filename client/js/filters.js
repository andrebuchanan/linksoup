(function()
{
"use strict";

angular.module('sandbox.filters', []).
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
