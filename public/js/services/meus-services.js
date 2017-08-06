angular.module('meusServices', [ 'ngResource' ])
  .factory('recursoFoto', function($resource) {

    return $resource('v1/fotos/:fotoId', null, {
      update: {
        method: 'PUT'
      }
    });

  })
  .factory('cadastroDeFotos', function(recursoFoto, $q, $rootScope) {

    var servico = {};
    var evento = 'fotoCadastrada';
    servico.cadastrar = function(foto) {
      return $q(function(resolve, reject) {
        if(foto._id) {
          recursoFoto.update({ fotoId: foto._id }, foto, function() {
            $rootScope.$broadcast(evento);
            resolve({
              mensagem: 'Foto ' + foto.titulo + ' editada com sucesso!',
              inclusao: false
            });
          }, function(erro) {
            console.log(erro);
            reject({
              mensagem: 'Não foi possível editar a foto ' + foto.titulo + '.'
            });
          });
        } else {
          recursoFoto.save(foto, function() {
            $rootScope.$broadcast(evento);
            resolve({
              mensagem: 'Foto ' + foto.titulo + ' cadastrada com sucesso!',
              inclusao: true
            });
          }, function(erro) {
            console.log(erro);
            reject({
              mensagem: 'Não foi possível cadastrar a foto ' + foto.titulo + '.'
            });
          });
        }
      });
    };
    return servico;

  });