'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:PostularCtrl
 * @description
 * # PostularCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('PostularCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $(document).ready(function() {
    $('select').material_select();
  });
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
  });
