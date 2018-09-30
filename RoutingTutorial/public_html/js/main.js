var app = angular.module("acmeAutos", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider.when("/lada", {templateUrl: 'vehiclecontent/Lada.html', controller: "ladaController"})
            .when("/landrover", {templateUrl: "vehiclecontent/landrover.html", controller: "landroverController"})
            .when("/porsche", {templateUrl: 'vehiclecontent/porsche.html', controller: "porscheController"})
            .otherwise({templateUrl: 'vehiclecontent/default.html', controller: "defaultController"});
}).controller("porscheController", function ($scope) {
    $scope.content = "Porsche content.... via controller scope";
}).controller("ladaController", function ($scope) {
    $scope.content = "Lada content.... via controller scope";
}).controller("defaultController", function ($scope) {
    $scope.content = "This is the default content";
    $scope.message = "Goodbye...";
});

app.controller("landroverController", function ($scope) {
    $scope.message = "Goodbye...";
});