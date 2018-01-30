'use strict';

/**
 * @ngdoc function
 * @name ebarrioApp.controller:ListaproyectosCtrl
 * @description
 * # ListaproyectosCtrl
 * Controller of the ebarrioApp
 */
angular.module('ebarrioApp')
  .controller('ListaproyectosCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
    $scope.usuario= sessionStorage.getItem("usuario");
    $scope.unirse= function(id,usuario){
      var result=confirm("¿Desea unirse a este proyecto?");
      if(result){
      $http.post("http://localhost:8080/dashboard/unir.php",{'id':id, 'usuario':usuario
    })


  .then(function(data, status, headers, config) {
         console.log("Data Inserted Successfully");
          alert("Se a unido con exito al proyecto"+ id);
        } 
      ,function(error){
        alert("Lo lamentamos no podemos unirte a un proyecto, intente más tarde")
      });
      // .error(function(data, status, headers, config) {
      //   $scope.errorMsg = 'Unable to LOGIN';
      // })
            
}
    }
  });
