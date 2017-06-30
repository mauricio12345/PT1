'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:MapaCtrl
 * @description
 * # MapaCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('MapaCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'uiGmapgoogle-maps'
    ];
    var vm=this;
    vm.menutemplate={
    	url:'views/menu.html'
    };
    var vm=this;
    vm.navtemplate={
      url:'views/navbar.html'
    };
    $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
  });
  });

