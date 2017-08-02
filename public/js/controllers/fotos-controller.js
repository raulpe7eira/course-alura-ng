angular.module('alurapic')
  .controller('FotosController', function($scope, $http) {

    $scope.filtro = "";
    $scope.fotos = [];
    $scope.mensagem = '';

    $http.get('v1/fotos')
      .success(function(fotos) {
        $scope.fotos = fotos;
      })
      .error(function(erro) {
        console.log(erro);
      });

    $scope.remover = function(foto) {
      $http.delete('v1/fotos/' + foto._id)
        .success(function() {
          var indexFoto = $scope.fotos.indexOf(foto);
          $scope.fotos.splice(indexFoto, 1);
          $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso!';
        })
        .error(function(erro) {
          console.log(erro);
          $scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;
        });
    };

  });
