'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('NavbarCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // Initialize collapse button
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  });
