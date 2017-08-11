'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:ProyectosCtrl
 * @description
 * # ProyectosCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('ProyectosCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.importar=function(){
  $http.get("listar.php")
  .then(function (response){
      $scope.proyecto = response.data.records;});

     

     
   }
   $scope.importar();

  // $scope.importar=function(){
  // $http.get("listar.php")
  // .then(function (response){
  //     $scope.proyecto = response.data.records;});

  // $scope.importar();

    $(document).ready(function(){
      $('.slider').slider();
      // Pause slider
	$('.slider').slider('pause');
	// Start slider
	$('.slider').slider('start');
	// Next slide
	$('.slider').slider('next');
	// Previous slide
	$('.slider').slider('prev');
    });
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
  });
