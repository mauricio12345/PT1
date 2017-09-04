'use strict';

/**
 * @ngdoc function
 * @name plataformaApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the plataformaApp
 */
angular.module('plataformaApp')
// .factory("sesionesControl", function(){
//     return {
//         //obtenemos una sesión //getter
//         get : function(key) {
//             return sessionStorage.getItem(key)
//         },
//         //creamos una sesión //setter
//         set : function(key, val) {
//             return sessionStorage.setItem(key, val)
//         },
//         //limpiamos una sesión
//         unset : function(key) {
//             return sessionStorage.removeItem(key)
//         }
//     }
// })
//     .factory("mensajesFlash", function($rootScope){
//     return {
//         show : function(message){
//             $rootScope.flash = message;
//         },
//         clear : function(){
//             $rootScope.flash = "";
//         }
//     }
// })
//     .factory("authUsers", function($http, $location, sesionesControl, mensajesFlash){
//     var cacheSession = function(email){
//         sesionesControl.set("userLogin", true);
//         sesionesControl.set("email", email);
//     }
//     var unCacheSession = function(){
//         sesionesControl.unset("userLogin");
//         sesionesControl.unset("email");
//     }
 
//     return {
//         //retornamos la función login de la factoria authUsers para loguearnos correctamente
//         login : function(user){
//             return $http({
//                 url: 'http://localhost:8080/BarrioAPI/login/loginUser',
//                 method: "POST",
//                 data : "email="+user.email+"&password="+user.password,
//                 headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//             }).success(function(data){
//                 if(data.respuesta == "success"){
//                     window.location.href="#/profile";
//                     //si todo ha ido bien limpiamos los mensajes flash
//                     mensajesFlash.clear();
//                     //creamos la sesión con el email del usuario
//                     cacheSession(user.email);
//                     //mandamos a la home
//                     $location.path("/home");
//                 }else if(data.respuesta == "incomplete_form"){
//                     mensajesFlash.show("Debes introducir bien los datos del formulario");
//                 }else if(data.respuesta == "failed"){
//                     mensajesFlash.show("El email o el password introducidos son incorrectos, inténtalo de nuevo.");
//                 }
//             }).error(function(){
//                 $location.path("/")
//             })
//         },
//         //función para cerrar la sesión del usuario
//         logout : function(){
//             return $http({
//                 url : "http://localhost/login_ci_angularjs/login/logoutUser"
//             }).success(function(){
//                 //eliminamos la sesión de sessionStorage
//                 unCacheSession();
//                 $location.path("/login");
//             });
//         },
//         //función que comprueba si la sesión userLogin almacenada en sesionStorage existe
//         isLoggedIn : function(){
//             return sesionesControl.get("userLogin");
//         }
//     }
// })
  .controller('LoginCtrl', function ($scope, $location, authUsers) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    
//     $scope.user = { email : "", password : "" }
//     authUsers.flash = "";
//     //función que llamamos al hacer sumbit al formulario
//     $scope.login = function(){
//         authUsers.login($scope.user);
//     }
// })
//    .run(function($rootScope, $location, authUsers){
//     //creamos un array con las rutas que queremos controlar
//     var rutasPrivadas = ["/mapa","/proyectos","/login"];
//     //al cambiar de rutas
//     $rootScope.$on('$routeChangeStart', function(){
//         //si en el array rutasPrivadas existe $location.path(), locationPath en el login
//         //es /login, en la home /home etc, o el usuario no ha iniciado sesión, lo volvemos 
//         //a dejar en el formulario de login
//         if(in_array($location.path(),rutasPrivadas) && !authUsers.isLoggedIn()){
//             $location.path("/login");
//         }
//         //en el caso de que intente acceder al login y ya haya iniciado sesión lo mandamos a la home
//         if(($location.path() === '/login') && authUsers.isLoggedIn()){
//             $location.path("/mapa");
//         }
//     })
});
 
// //función in_array que usamos para comprobar si el usuario
// //tiene permisos para estar en la ruta actual
// function in_array(needle, haystack, argStrict){
//   var key = '',
//   strict = !! argStrict;
 
//   if(strict){
//     for(key in haystack){
//       if(haystack[key] === needle){
//         return true;
//       }
//     }
//   }else{
//     for(key in haystack){
//       if(haystack[key] == needle){
//         return true;
//       }
//     }
//   }
//   return false;
// }


 
