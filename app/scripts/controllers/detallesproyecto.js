'use strict';

/**
 * @ngdoc function
 * @name ebarrioApp.controller:DetallesproyectoCtrl
 * @description
 * # DetallesproyectoCtrl
 * Controller of the ebarrioApp
 */
angular.module('ebarrioApp')
  .controller('DetallesproyectoCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
    $scope.invento=function(id){
    $http.post("list_participantes.php", {
                'id':id
            }).then(function(data, status, headers, config){
                    console.log("Data Inserted Successfully");
                },function(error){
                    alert("Lo lamentamos! Tenemos problemas para guardar tu consumo, intenta mas tarde");
                     });
    $http.get("list_participantes.php")
    .then(function(response) {
        $scope.myWelcome = response.data;
    });
}
  });
