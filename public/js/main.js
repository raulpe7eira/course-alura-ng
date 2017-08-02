angular.module('alurapic', [ 'minhasDirectives', 'ngAnimate', 'ngRoute' ])
  .config(function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
      templateUrl: 'partials/principal.html',
      controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
      templateUrl: 'partials/foto.html'
    });

    $routeProvider.otherwise({
      redirectTo: '/fotos'
    });

  });
