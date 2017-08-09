'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:UsuariosCtrl
 * @description
 * # UsuariosCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('UsuariosCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.importar=function(){
  $http.get("listar_user.php")
  .then(function (response){
      $scope.usuario = response.data.records;});     
   }
   $scope.importar();
   $scope.insert=function(){      
            $http.post("insert_user.php", {
                'nombre':$scope.nombre,
                'apellido':$scope.apellido,
                'contrasena':$scope.contrasena,
                'correo':$scope.correo,
                // 'nacimiento':$scope.nacimiento
            }).then(function(response){
                    console.log("Data Inserted Successfully");
                    console.log($scope.nombre);
                    console.log($scope.apellido);
                    console.log($scope.contrasena);
                    console.log($scope.correo);
                    // console.log($scope.nacimiento);
                },function(error){
                    alert("Sorry! Data Couldn't be inserted!");
                    console.error(error);

                });
            }

     var vm=this;
    vm.menutemplate={
    	url:'views/menu.html'
    };
  });
