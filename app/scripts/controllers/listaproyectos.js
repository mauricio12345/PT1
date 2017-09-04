'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:ListaproyectosCtrl
 * @description
 * # ListaproyectosCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
.factory('Proyectos', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/BarrioAPI/proyectos/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
  .controller('ListaproyectosCtrl', function ($scope,$http,Proyectos,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var id = $route.id;

        Proyectos.get({id: id}, function (data) {
            $scope.proyecto = data.response;
        })

        $scope.remove = function (id) {
            Proyectos.delete({id: id}).$promise.then(function (data) {
                if (data.response) {
                    $route.reload();
                }
            })
        };

        $scope.settings = {
            pageTitle: "Agregar proyecto",
            action: "Agregar"
        };

        $scope.proyecto = {
            idproyecto: "",
            descripcion: "",
            region: "",
            ciudad: "",
            estado: "",
            requisito: ""
        };

        $scope.submit = function () {
            Proyectos.save({proyecto: $scope.proyecto}).$promise.then(function (data) {
                if (data.response) {
                    angular.copy({}, $scope.proyecto);
                    $scope.settings.success = "El proyecto ha sido creada correctamente!";
                }
            })
        };
    

    var vm=this;
    vm.menutemplate={
    url:'views/menu.html'
    };
     $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  });
