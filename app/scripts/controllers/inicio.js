'use strict';

/**
 * @ngdoc function
 * @name ebarrioApp.controller:InicioCtrl
 * @description
 * # InicioCtrl
 * Controller of the ebarrioApp
 */
angular.module('ebarrioApp')
  .controller('InicioCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
     $scope.usuario= sessionStorage.getItem("usuario");
    toastr.success('Bienvenido '+ $scope.usuario );
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
  });
