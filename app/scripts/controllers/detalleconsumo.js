'use strict';

/**
 * @ngdoc function
 * @name ebarrioApp.controller:DetalleconsumoCtrl
 * @description
 * # DetalleconsumoCtrl
 * Controller of the ebarrioApp
 */
angular.module('ebarrioApp')
  .controller('DetalleconsumoCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $http({
  method: 'GET',
  url: 'https://api.mlab.com/api/1/databases/efficientmdb/collections/ConsumoDia?apiKey=7K2Y6doZUobEqRHLROy1D26_rHQOL89B'
}).then(function successCallback(response) {
	$scope.consumo = response.data;
	console.log(response);
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  });
