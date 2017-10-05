'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:DestallesproyectoCtrl
 * @description
 * # DestallesproyectoCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
.factory('Participante', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/BarrioAPI/participantes/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
.factory('Proyecto', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/BarrioAPI/proyectos/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
  .controller('DestallesproyectoCtrl', function ($scope,$http,Participante,$route,Proyecto) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var id = $route.id;

        Participante.get({id: id}, function (data) {
            $scope.participante = data.response;
        })
        Proyecto.get({id: id}, function (data) {
            $scope.proyecto = data.response;
        })

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
    	var vm=this;
    	vm.menutemplate={
    	url:'views/menu.html'
    	};
    	$('.map-container')
    	.click(function(){
      $(this).find('iframe').addClass('clicked')})
  .mouseleave(function(){
      $(this).find('iframe').removeClass('clicked')});
  });
