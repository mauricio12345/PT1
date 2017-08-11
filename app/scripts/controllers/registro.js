'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('RegistroCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.insert=function(){      
            $http.post("insert_user.php", {
                'nombre':$scope.nombre,
                'apellido':$scope.apellido,
                'contrasena':$scope.contrasena,
                'correo':$scope.correo,
                'nacimiento':$scope.nacimiento
            }).then(function(response){
                    console.log("Data Inserted Successfully");
                    console.log($scope.nombre);
                    console.log($scope.apellido);
                    console.log($scope.contrasena);
                    console.log($scope.correo);
                    // console.log($scope.nacimiento);
                    alert("Usuario registrado con exito");
                },function(error){
                    alert("Sorry! Data Couldn't be inserted!");
                    console.error(error);

                });
            }
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 150 // Creates a dropdown of 15 years to control year
  });
  });
