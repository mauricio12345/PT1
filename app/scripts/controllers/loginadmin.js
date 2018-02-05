'use strict';

/**
 * @ngdoc function
 * @name ebarrioApp.controller:LoginadminCtrl
 * @description
 * # LoginadminCtrl
 * Controller of the ebarrioApp
 */
angular.module('ebarrioApp')
  .controller('LoginadminCtrl', function ($scope,$http,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
   $scope.insertdata=function(){
      $http({
            method: 'GET',
            url: 'http://localhost:8080/API/loginadmin',
            params: {correo: $scope.user, contrasena: $scope.pswd}
            })
      .then(function(respuesta) {
          $scope.consumos = respuesta.data.consumos ;
          console.log(respuesta);
          sessionStorage.setItem("usuario",$scope.user);
          window.location.href = '/#!/casillaproyectos';
        }, 
      function(respuesta) { // optional
            console.log(respuesta)
            toastr.error('Usuario o contraseña incorrectos');
        });
    }
  console.log($rootScope.usuario);
  $scope.user=$rootScope.usuario;
  console.log("usuario: ");
  console.log($scope.user);

  });
