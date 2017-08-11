'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:ListaproyectosCtrl
 * @description
 * # ListaproyectosCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
  .controller('ListaproyectosCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    

     var config = {
    apiKey: "AIzaSyA71DVboCSlOzIoy6qo4pMbeMU8JpGvXZw",
    authDomain: "ebarrio-c0814.firebaseapp.com",
    databaseURL: "https://ebarrio-c0814.firebaseio.com",
    projectId: "ebarrio-c0814",
    storageBucket: "ebarrio-c0814.appspot.com",
    messagingSenderId: "620933575940"
  };
  firebase.initializeApp(config);

  // var proyectos= new Firebase('https://ebarrio-c0814.firebaseio.com/proyectos');
  //   $scope.proyectos= $firebase(proyectos);
  //   $scope.agregarProyecto=function(){
  //     $scope.proyectos.$add({texto:$scope.textoNuevoProyecto, hecho: false});
  //     $scope.textoNuevoProyecto='';
  //   }
  // var databaseService = firebase.database();
  // var referencia = databaseService.ref('proyectos');
  // $scope.agregarProyecto=function(){
  
  
  // referencia.set({
  // campoTest: 'valor del test',
  // ahora: new Date().getTime()
  // })
  // .then(function() {
  //           console.log('dato almacenado correctamente');
  //       })
  //       .catch(function(error) {
  //           console.log('detectado un error', error);
  //       });
 
 // }
 // $scope.importar=function(){
 //  $http.get('listar.php').success(function(datos){
 //    $scope.proyecto=datos;
 //  });
 // }
 $scope.importar=function(){
  $http.get("listar.php")
  .then(function (response){
      $scope.proyecto = response.data.records;});

     

     
   }
  $scope.insert=function(){      
            $http.post("insert.php", {
                'nombre':$scope.nombre,
                'descripcion':$scope.descripcion,
                'region':$scope.region,
                'ciudad':$scope.ciudad,
                'estado':$scope.estado,
                'requisito':$scope.requisito
            }).then(function(response){
                    console.log("Data Inserted Successfully");
                    console.log($scope.nombre);
                    console.log($scope.descripcion);
                    console.log($scope.region);
                    console.log($scope.ciudad);
                    console.log($scope.estado);
                },function(error){
                    alert("Sorry! Data Couldn't be inserted!");
                    console.error(error);

                });
            }

    $scope.importar();
    
    // .filter('cambiar',function(){
    //   var cambiarFiltro = function(valor){
    //     if(valor==0){
    //       var nuevosDatos="Pendiente";
    //     }
    //     else if(valor==1){
    //       var nuevosDatos="En ejecucion";
    //     }
    //     else{
    //       var nuevosDatos="Terminado";
    //     }
    //     return nuevosDatos;
    //   }
    //     return cambiarFiltro;
    // });

    var vm=this;
    vm.menutemplate={
    url:'views/menu.html'
    };
     $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  });
