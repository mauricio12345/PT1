'use strict';

/**
 * @ngdoc function
 * @name ebarrioApp.controller:DetallesproyectoCtrl
 * @description
 * # DetallesproyectoCtrl
 * Controller of the ebarrioApp
 */
angular.module('ebarrioApp')
  .controller('DetallesproyectoCtrl', function ($http,$scope, almacenador) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };

    //consol.log(almacenador.setMetohd)

    $scope.pid=sessionStorage.getItem("pid2");
    console.log("id pid");
    console.log($scope.pid);

    $http({
            method: 'GET',
            url: 'http://localhost:8080/API/verproyectoid',
            params: {"id": $scope.pid }
            })
      .then(function(respuesta) {
          $scope.detalles = respuesta.data ;
           
          console.log(respuesta);
          console.log("detalles proyecto");
          console.log($scope.detalles);
          $scope.prom=sessionStorage.getItem("prom");
          $scope.meta=Math.round($scope.prom - (($scope.prom)*($scope.detalles.meta / 100)));
          // toastr.success('done', 'Correcto');
        }, 
      function() { // optional
            //toastr.error('Error faltan datos', 'Error');
            // $location.path('/');
        });

      
          $http({
            method: 'GET',
            url: 'http://localhost:8080/API/verparticipantes',
            params: {"id": $scope.pid }
            })
      .then(function(respuesta) {
          $scope.participantes = respuesta.data ;
           
          console.log(respuesta);
          console.log("detalles de participantes");
          console.log($scope.participantes);
          // toastr.success('done', 'Correcto');
        }, 
      function() { // optional
            //toastr.error('Error faltan datos', 'Error');
            // $location.path('/');
        });

       $http({
            method: 'GET',
            url: 'http://localhost:8080/API/verpromedios',
            })
      .then(function(respuesta) {
          $scope.promedios = respuesta.data.ventas ;
           
          console.log(respuesta);
          console.log("detalles de promedios");
          console.log($scope.promedios);
          // toastr.success('done', 'Correcto');
        }, 
      function() { // optional
            //toastr.error('Error faltan datos', 'Error');
            // $location.path('/');
        });
       

  });
