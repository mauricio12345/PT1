'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('MenuCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $( document ).ready(function(){
        $('.button-collapse').sideNav();
        $('.button-collapse').sideNav('hide');
        s$('.dropdown-button').dropdown({ hover: true, constrain_width: true, belowOrigin: true, alignment: 'right' });
      });
  });
