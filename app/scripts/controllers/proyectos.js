'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:ProyectosCtrl
 * @description
 * # ProyectosCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
.factory('Proyectos', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/BarrioAPI/proyectos/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
  .controller('ProyectosCtrl', function ($scope,$http,Proyectos,$route) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     

  // $scope.importar=function(){
  // $http.get("listar.php")
  // .then(function (response){
  //     $scope.proyecto = response.data.records;});

  // $scope.importar();
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

    $(document).ready(function(){
      $('.slider').slider();
      // Pause slider
	$('.slider').slider('pause');
	// Start slider
	$('.slider').slider('start');
	// Next slide
	$('.slider').slider('next');
	// Previous slide
	$('.slider').slider('prev');
    });
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };

     $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
  });
