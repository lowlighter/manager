angular.module("template/carousel/carousel.html", []).run(["$templateCache", function($templateCache){
    $templateCache.put("template/carousel/carousel.html",
        "<div ng-mouseenter=\"pause()\" ng-mouseleave=\"play()\" class=\"carousel\">" +
        "    <ol class=\"carousel-indicators\" ng-show=\"slides().length > 1\">" +
        "        <li ng-repeat=\"slide in slides()\" ng-class=\"{active: isActive(slide)}\" ng-click=\"select(slide)\"></li>" +
        "    </ol>" +
        "    <div class=\"carousel-inner\" ng-transclude></div>" +
        "    <a ng-click=\"prev()\" class=\"carousel-control left\" ng-show=\"slides().length > 1\">&lsaquo;</a>" +
        "    <a ng-click=\"next()\" class=\"carousel-control right\" ng-show=\"slides().length > 1\">&rsaquo;</a>" +
        "</div>" +
        "");
}]);
