'use strict';

/**
 * @ngdoc function
 * @name ebarrioApp.controller:ConsumoactualCtrl
 * @description
 * # ConsumoactualCtrl
 * Controller of the ebarrioApp
 */
angular.module('ebarrioApp')
  .controller('ConsumoactualCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.insertdata=function(){
    console.log("get");
    $http({
  method: 'GET',
  url: 'https://api.mlab.com/api/1/databases/efficientmdb/collections/ConsumoMes?apiKey=7K2Y6doZUobEqRHLROy1D26_rHQOL89B'
}).then(function successCallback(response) {
	$scope.consumo = response.data;
	consolo.log(response);
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
 


  
      // .error(function(data, status, headers, config) {
      //   $scope.errorMsg = 'Unable to LOGIN';
      // })
            
  }


  });
