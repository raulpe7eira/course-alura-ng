angular.module('alurapic', [ 'minhasDirectives', 'ngAnimate', 'ngRoute', 'meusServices' ])
  .config(function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
      templateUrl: 'partials/principal.html',
      controller: 'FotosController'
    });

    $routeProvider.when('/fotos/new', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
    });

    $routeProvider.when('/fotos/edit/:fotoId', {
      templateUrl: 'partials/foto.html',
      controller: 'FotoController'
    });

    $routeProvider.otherwise({
      redirectTo: '/fotos'
    });

  });
