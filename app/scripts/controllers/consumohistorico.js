'use strict';

/**
 * @ngdoc function
 * @name ebarrioApp.controller:ConsumohistoricoCtrl
 * @description
 * # ConsumohistoricoCtrl
 * Controller of the ebarrioApp
 */
angular.module('ebarrioApp')
.factory('Consumohistorico', ['$resource', function ($resource) {
            return $resource('http://localhost:8080/BarrioAPI/consumohistorico/:id', {id: "@_id"}, {
                update: {method: "PUT", params: {id: "@_id"}}
            })
        }])
  .controller('ConsumohistoricoCtrl', function ($scope, Consumohistorico, $routeParams, $route,$rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var id = $routeParams.id;
    Consumohistorico.get({id: id}, function (data) {
            console.log(data.response);
            $scope.consumohistorico = data.response;
             $rootScope.mes_uno=data.boleta_uno;
            sessionStorage.setItem("mes", $rootScope.mes_uno);
            console.log("boleta_uno");
            $scope.usuario= sessionStorage.getItem("mes")
            console.log($scope.usuario);
            console.log("consumo historico:::::");
            console.log(data.response);
        })
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
    $scope.usuario= sessionStorage.getItem("mes");
    console.log($scope.usuario);
    $scope.grafica=function(boleta_uno,boleta_dos,boleta_tres){
      Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['consumo']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'consumo_uno',
        data: [ boleta_uno]
    }, {
        name: 'consumo_dos',
        data: [boleta_dos]
    }, {
        name: 'consumo_tres',
        data: [boleta_tres]
    }]
});}
    
  
  });
