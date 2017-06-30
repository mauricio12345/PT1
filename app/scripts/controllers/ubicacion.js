'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:UbicacionCtrl
 * @description
 * # UbicacionCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('UbicacionCtrl', function () {
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
