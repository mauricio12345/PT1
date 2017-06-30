'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('RegistroCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 150 // Creates a dropdown of 15 years to control year
  });
  });
