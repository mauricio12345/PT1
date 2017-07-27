'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:ListaproyectosCtrl
 * @description
 * # ListaproyectosCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('ListaproyectosCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.nombre="Proyectos";
    $scope.nuevoProyecto={};
    $scope.proyectos=[{
      "nombre": "Recambio Luminarias Alumbrado Publico", 
      "objetivo": "Realizar el recambio masivo de alumbrado público en diferentes comunas del país, por tecnologías más eficientes (LED).", 
      "beneficiario":"El programa beneficia a comunas que tengan su parque de Alumbrado público envejecido o con tecnologías ineficientes Ademas que cumplan con las metas de ahorro de energia propuestas", 
      "meta": "20% de ahorro en consumo de energia"
    }];
    $scope.agregarProyecto= function(){
      $scope.proyectos.push($scope.nuevoProyecto);
      $scope.nuevoProyecto={};
  };
  

    var vm=this;
    vm.menutemplate={
    url:'views/menu.html'
    };
     $(document).ready(function(){
    $('.collapsible').collapsible();
  });


  });
