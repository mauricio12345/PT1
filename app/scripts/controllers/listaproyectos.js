'use strict';

/**
 * @ngdoc function
 * @name ebarrioApp.controller:ListaproyectosCtrl
 * @description
 * # ListaproyectosCtrl
 * Controller of the ebarrioApp
 */
angular.module('ebarrioApp')
  .controller('ListaproyectosCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
  });
