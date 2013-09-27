(function()
{
"use strict";

angular.module("linksoup.directives", []).
  //
  // Version directive
  directive("version", function(version) {
    return {
      replace: true,
      restrict: "E",
      template: "<div>AngualrJS v{{ver}}</div>",
      link: function(scope)
      {
        scope.ver = angular.version.full;
      }
    };
  });
})();
