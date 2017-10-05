'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:DetallesCtrl
 * @description
 * # DetallesCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
.factory('Detalles', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/BarrioAPI/consumomes/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
.factory('Meta', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/BarrioAPI/meta/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
  .controller('DetallesCtrl', function ($scope,$http,Detalles,$route,Meta) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  $scope.contador= 0;
  $scope.sumar = function(cantidad) { $scope.contador += cantidad; };
  $scope.restar = function(cantidad) { $scope.contador -= cantidad; };

     $http.get("https://api.mlab.com/api/1/databases/efficientmdb/collections/ConsumoDia?apiKey=7K2Y6doZUobEqRHLROy1D26_rHQOL89B")
  	.then(function (response){
      $scope.valor = response.data;});
  
  
     var id = $route.id;

        Detalles.get({id: id}, function (data) {
            $scope.detalle = data.response;
        })
        Meta.get({id: id}, function (data) {
            $scope.meta = data.response;
        })
    var vm=this;
    	vm.menutemplate={
    	url:'views/menu.html'
    	};
    	$(document).ready(function() {
      //$(".dial").knob();
      $('.dial').knob({
        'min':0,
        'max':100,
        'width':250,
        'height':250,
        'displayInput':true,
        'fgColor':"#2a3496",
        'release':function(v) {$("p").text(v);},
        'readOnly':true
      });
    })
    	$('.map-container')
    	.click(function(){
      $(this).find('iframe').addClass('clicked')})
  .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')});
  });
