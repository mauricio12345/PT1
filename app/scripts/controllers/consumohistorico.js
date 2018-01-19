'use strict';

/**
 * @ngdoc function
 * @name ebarrioApp.controller:ConsumohistoricoCtrl
 * @description
 * # ConsumohistoricoCtrl
 * Controller of the ebarrioApp
 */
angular.module('ebarrioApp')
  .controller('ConsumohistoricoCtrl', function () {
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
