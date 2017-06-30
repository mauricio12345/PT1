'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $(document).ready(function(){
      $('.parallax').parallax();
    });

  
  
    
});
  
