'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:GraficoCtrl
 * @description
 * # GraficoCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('GraficoCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	   $http({
	   	method: 'GET',
	   	url:'https://api.mlab.com/api/1/databases/efficientmdb/collections/ConsumoMes?apiKey=7K2Y6doZUobEqRHLROy1D26_rHQOL89B'
	   }).then(function successCallback(response){
	   	$scope.posts = response.data

	   },function errorCallback(response){

	   });
	   $http({
	   	method: 'GET',
	   	url:'https://api.mlab.com/api/1/databases/efficientmdb/collections/ConsumoDia?apiKey=7K2Y6doZUobEqRHLROy1D26_rHQOL89B'
	   }).then(function successCallback(response){
	   	$scope.diario = response.data

	   },function errorCallback(response){

	   });
	   var vm=this;
    	vm.menutemplate={
    	url:'views/menu.html'
    	};

	    // $scope.myChartObject = {};
	    // $scope.myChartObject.type = "Gauge";

	    // $scope.myChartObject.options = {
	    //   width: 400,
	    //   height: 120,
	    //   redFrom: 90,
	    //   redTo: 100,
	    //   yellowFrom: 75,
	    //   yellowTo: 90,
	    //   minorTicks: 5
	    // };

	    // $scope.myChartObject.data = [
	    //   ['Label', 'Value'],
	    //   ['Kwh',],
	    //   ['CPU', 55],
	    //   ['Network', 68]
	    // ];
	  
});
	    	
	
  // });
