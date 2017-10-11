'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
.factory('Usuarios', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/BarrioAPI/usuarios/id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
  .controller('RegistroCtrl', function ($scope,$http,Usuarios,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // var id = $route.id;

    //     Usuarios.get({id: id}, function (data) {
    //         $scope.usuario = data.response;
    //     })

    //     $scope.remove = function (id) {
    //         Usuarios.delete({id: id}).$promise.then(function (data) {
    //             if (data.response) {
    //                 $route.reload();
    //             }
    //         })
    //     };

    //     $scope.settings = {
    //         pageTitle: "Agregar proyecto",
    //         action: "Agregar"
    //     };

    //     $scope.usuario = {
    //         idusuario: "",
    //         nombre: "",
    //         apellido: "",
    //         contrasena: "",
    //         correo: "",
    //         nacimiento: ""
    //     };
      

    //     $scope.submit = function () {
    //         Usuarios.save({usuario: $scope.usuario}).$promise.then(function (data) {
    //             if (data.response) {
    //                 angular.copy({}, $scope.usuario);
    //                 $scope.settings.success = "El Usuario ha sido creada correctamente!";
    //             }
    //         })
    //    };
    
    // $scope.insert=function(){      
    //         $http.post("insert_user.php", {
    //             'nombre':$scope.nombre,
    //             'apellido':$scope.apellido,
    //             'contrasena':$scope.contrasena,
    //             'correo':$scope.correo,
    //             'nacimiento':$scope.nacimiento
    //         }).then(function(response){
    //                 console.log("Data Inserted Successfully");
    //                 console.log($scope.nombre);
    //                 console.log($scope.apellido);
    //                 console.log($scope.contrasena);
    //                 console.log($scope.correo);
    //                 // console.log($scope.nacimiento);
    //                 alert("Usuario registrado con exito");
    //             },function(error){
    //                 alert("Sorry! Data Couldn't be inserted!");
    //                 console.error(error);

    //             });
    //         }
    $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 150 // Creates a dropdown of 15 years to control year
  });
  });
