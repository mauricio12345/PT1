'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:UsuariosCtrl
 * @description
 * # UsuariosCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('UsuariosCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.importar=function(){
  $http.get("listar_usuario.php")
  .then(function (response){
      $scope.usuario = response.data.records;});
  }
  console.log($scope.usuario);
   $scope.importar();
 
     var vm=this;
    vm.menutemplate={
    	url:'views/menu.html'
    };
    $('.map-container')
  .click(function(){
      $(this).find('iframe').addClass('clicked')})
  .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')});
  });
