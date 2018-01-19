'use strict';

/**
 * @ngdoc function
 * @name ebarrioApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ebarrioApp
 */
angular.module('ebarrioApp')
  // .factory("sessionesControl", function(){
  //   return{
  //     //obtenemos una session
  //     get : function(key){
  //       return sessionesStorage.getItem(key)
  //     },
  //     //creamos una sesion
  //     set : function(key, val){
  //       return sessionesStorage.setItem(key, val)
  //     },
  //     //limpiamos una session
  //     unset : function(key){
  //       return sessionesStorage.removeItem(key)
  //     }
  //   }
  // })
  // .factory("mensajeFlash", function($rootScope){
  //   return {
  //     show : function(message){
  //       $rootScope.flash = message;
  //     },
  //     clear : function(){
  //       $rootScope.flash="";
  //     }
  //   }
  // })

  // // factory que permite loguear y desloguear usuarios en angularjs
  // .factory("authUsers", function($http, $location, sessionesControl,mensajeFlash){
  //   var cacheSession = function(email){
  //     sessionesControl.set("userLogin", true);
  //     sessionesControl.set("email", email);
  //   }
  //   var unCacheSession = function(){
  //     sessionesControl.unset("userLogin");
  //     sessionesControl.unset("email");
  //   }
  //   return{
  //     //retornamos la funcionlogin de la fatory authusers para permitir el logue correctamente
  //     login : function(user){
  //       return $http({
  //         url:'http://localhost:8080/BarrioAPI/login/loginUser',
  //         method: "POST",
  //         data:"email="+user.email+"&password="+user.password,
  //         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  //       }).then(function successCallback(data){
  //         if(data.respuesta =="succes"){
  //           mensaje.Flash.clear();
  //           cacheSession(user.email);
  //           $location.path("/#!/inicio");
  //         }else if(data.respuesta =="incomplete_form"){
  //           mensajeFlash.show("Datos incompletos, vuelta a intentar");
  //         }else if(data.respuesta="failed"){
  //           mensajeFlash.show("Usuario o contraseña incorrectos, intente otra vez");
  //         }
  //       },function errorCallback(){
  //         $location.path("/")
  //       });
  //     },
  //     logout : function(){
  //       return $http(
  //   {
  //      url: 'http://localhost:8080/BarrioAPI/login/logoutUser',  /*You URL to post*/

  //   }).then(function successCallback() {
  //      unCacheSession();
  //      $location.paht("/#!/login");


  //   });
  //     },
  //     isLoggedIn : function(){
  //       return sessionesControl.get("userLogin");
  //     }
  //   }
  // })
  // .controller("homeController", function($scope, sessionesControl,authUsers){
  //   $scope.email=sessionesControl.get("email");
  //   $scope.logout = function(){
  //     authusers.logout();
  //   }
  // })

  // .run(function($rootScope, $location, authUsers){
  //   var rutasPrivadas = ["/#!/inicio", "/#!/crearproyecto", "/#!/listaproyectos","/#!/ingresoconsumo"];
  //   $rootScope.$on('routeChangeStart', function(){
  //     if(in_array($location.path(),rutasPrivadas)&&!authUsers.isLoggedIn()){
  //       $location.path("/#!/login");
  //     }
  //     if(($location.path()==='/#!/login')&& authUsers.isLoggedIn()){
  //       location.path("/#!/inicio");
  //     }
  //   })
  // })
  // .controller("LoginController",function($scope, $location, authUsers){
  //   $scope.user={ email: "", password : ""}
  //   authUsers.flash="";
  //   $scope.login=function(){
  //     authUsers.login($scope.user);
  //   }
  // })

  // function in_array(needle, haystack, argStrict){
  //   var key='',
  //   strict=!! argStrict;

  //   if(strict){
  //     for(key in haystack){
  //       if(haystack[key]===needle){
  //         return true;
  //       }
  //     }
  //   }else{
  //     for(key in haystack){
  //       if(haystack[key]===needle){
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // }

  
  .controller('LoginCtrl', function ($scope,$http,$rootScope,$location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.baseurl=$location.absUrl();
  console.log($scope.baseurl);
     $scope.insertdata=function(){
    console.log("triggered");
 $http.post("http://localhost:8080/dashboard/login.php",{'theusername':$scope.user, 'thepassword':$scope.pswd})


  .then(function(data, status, headers, config) {
        var mssg = data.MESSAGE;
        
        console.log(data);      
        if(data.data==='correct'){
          console.log(data.config.data.theusername);
          $rootScope.usuario=data.config.data.theusername;
          window.location.href = '/#!/inicio';
        } else {
          $scope.errorMsg = "Usuario o Contraseña no validos";
        }
      })
      // .error(function(data, status, headers, config) {
      //   $scope.errorMsg = 'Unable to LOGIN';
      // })
            
  }
  console.log($rootScope.usuario);
  $scope.user=$rootScope.usuario;
  console.log("usuario: ");
  console.log($scope.user);

  });
