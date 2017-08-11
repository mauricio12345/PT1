'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:ConsumodiarioCtrl
 * @description
 * # ConsumodiarioCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('ConsumodiarioCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

     $scope.importar=function(){
  $http.get("listar_valores.php")
  .then(function (response){
      $scope.valor = response.data.records;});   
   }
   $scope.importar();
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
  });
