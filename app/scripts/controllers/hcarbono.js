'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:HcarbonoCtrl
 * @description
 * # HcarbonoCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('HcarbonoCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm=this;
    vm.menutemplate={
    	url:'views/menu.html'
    };
     $(document).ready(function(){
    $('.collapsible').collapsible();
  });
  });
