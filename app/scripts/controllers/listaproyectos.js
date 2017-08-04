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
    // var proyectos= new Firebase('https://ebarrio-c0814.firebaseio.com/proyectos');
    // $scope.proyectos= $firebase(proyectos);
    // $scope.agregarProyecto=function(){
    //   $scope.proyectos.$add({texto:$scope.textoNuevoProyecto, hecho: false});
    //   $scope.textoNuevoProyecto='';
    // }

     var config = {
    apiKey: "AIzaSyA71DVboCSlOzIoy6qo4pMbeMU8JpGvXZw",
    authDomain: "ebarrio-c0814.firebaseapp.com",
    databaseURL: "https://ebarrio-c0814.firebaseio.com",
    projectId: "ebarrio-c0814",
    storageBucket: "ebarrio-c0814.appspot.com",
    messagingSenderId: "620933575940"
  };
  firebase.initializeApp(config);
  var databaseService = firebase.database();
  var referencia = databaseService.ref('proyectos');
  $scope.agregarProyecto=function(){
  
  
  referencia.set({
  campoTest: 'valor del test',
  ahora: new Date().getTime()
  })
  .then(function() {
            console.log('dato almacenado correctamente');
        })
        .catch(function(error) {
            console.log('detectado un error', error);
        });
 
  }

    var vm=this;
    vm.menutemplate={
    url:'views/menu.html'
    };
     $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  });
