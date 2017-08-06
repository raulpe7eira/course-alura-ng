angular.module('minhasDirectives', [])
  .directive('meuPainel', function() {

    var ddo = {};
    ddo.restric = "AE";
    ddo.scope = {
      titulo: '@'
    };
    ddo.transclude = true;
    ddo.templateUrl = 'js/directives/meu-painel.html';
    return ddo;

  })
  .directive('minhaFoto', function() {

    var ddo = {};
    ddo.restrict = "AE";
    ddo.scope = {
      titulo: '@',
      url: '@'
    };
    ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';
    return ddo;

  })
  .directive('meuBotaoPerigo', function() {

    var ddo = {};
    ddo.restrict = "E";
    ddo.scope = {
      nome: '@',
      acao: '&'
    };
    ddo.template = '<button ng-click="acao(foto)" class="btn btn-block btn-danger">{{nome}}</button>';
    return ddo;

  })
  .directive('meuFocus', function() {

    var ddo = {};
    ddo.restric = "A";
    ddo.scope = {
      focado: '='
    };
    ddo.link = function(scope, element) {
      scope.$watch('focado', function() {
        if (scope.focado) {
          element[0].focus();
          scope.focado = false;
        }
      });
    };
    return ddo;

  });
