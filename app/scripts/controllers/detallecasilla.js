'use strict';

/**
 * @ngdoc function
 * @name ebarrioApp.controller:DetallecasillaCtrl
 * @description
 * # DetallecasillaCtrl
 * Controller of the ebarrioApp
 */
angular.module('ebarrioApp')
  .controller('DetallecasillaCtrl', function ($scope,$http,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.pid=sessionStorage.getItem("pid");

    $http({
            method: 'GET',
            url: 'http://localhost:8080/API/verproyectoid',
            params: {"id": $scope.pid }
            })
      .then(function(respuesta) {
          $scope.detalles = respuesta ;
           
          console.log(respuesta);
          console.log("proyecto detalles");
          console.log($scope.detalles);
          // toastr.success('done', 'Correcto');
        }, 
      function() { // optional
            //toastr.error('Error faltan datos', 'Error');
            // $location.path('/');
        });


   
  });
