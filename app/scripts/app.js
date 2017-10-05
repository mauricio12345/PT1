'use strict';

/**
 * @ngdoc overview
 * @name plataformaApp
 * @description
 * # plataformaApp
 *
 * Main module of the application.
 */
angular
  .module('plataformaApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js',
    'toaster'
    ])
  
  .config(function ($routeProvider,ChartJsProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/mapa', {
        templateUrl: 'views/mapa.html',
        controller: 'MapaCtrl',
        controllerAs: 'mapa'
      })
      .when('/registro', {
        templateUrl: 'views/registro.html',
        controller: 'RegistroCtrl',
        controllerAs: 'registro'
      })
      .when('/exito', {
        templateUrl: 'views/exito.html',
        controller: 'ExitoCtrl',
        controllerAs: 'exito'
      })
      .when('/proyectos', {
        templateUrl: 'views/proyectos.html',
        controller: 'ProyectosCtrl',
        controllerAs: 'proyectos'
      })
      .when('/postular', {
        templateUrl: 'views/postular.html',
        controller: 'PostularCtrl',
        controllerAs: 'postular'
      })
      .when('/hcarbono', {
        templateUrl: 'views/hcarbono.html',
        controller: 'HcarbonoCtrl',
        controllerAs: 'hcarbono'
      })
      .when('/ubicacion', {
        templateUrl: 'views/ubicacion.html',
        controller: 'UbicacionCtrl',
        controllerAs: 'ubicacion'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        controllerAs: 'menu'
      })
      .when('/grafico', {
        templateUrl: 'views/grafico.html',
        controller: 'GraficoCtrl',
        controllerAs: 'grafico'
      })
      .when('/metas', {
        templateUrl: 'views/metas.html',
        controller: 'MetasCtrl',
        controllerAs: 'metas'
      })
      .when('/navbar', {
        templateUrl: 'views/navbar.html',
        controller: 'NavbarCtrl',
        controllerAs: 'navbar'
      })
      .when('/listaProyectos', {
        templateUrl: 'views/listaproyectos.html',
        controller: 'ListaproyectosCtrl',
        controllerAs: 'listaProyectos'
      })
      .when('/consumodiario', {
        templateUrl: 'views/consumodiario.html',
        controller: 'ConsumodiarioCtrl',
        controllerAs: 'consumodiario'
      })
      .when('/dibujar', {
        templateUrl: 'views/dibujar.php',
        controller: 'DibujarCtrl',
        controllerAs: 'dibujar'
      })
      .when('/ebarrio', {
        templateUrl: 'views/ebarrio.php',
        controller: 'EbarrioCtrl',
        controllerAs: 'ebarrio'
      })
      .when('/conexion.php', {
        templateUrl: 'views/conexion.php',
        controller: 'ConexionPhpCtrl',
        controllerAs: 'conexion.php'
      })
      .when('/usuarios', {
        templateUrl: 'views/usuarios.html',
        controller: 'UsuariosCtrl',
        controllerAs: 'usuarios'
      })
      .when('/misproyectos', {
        templateUrl: 'views/misproyectos.html',
        controller: 'MisproyectosCtrl',
        controllerAs: 'misproyectos'
      })
      .when('/modificarvalores', {
        templateUrl: 'views/modificarvalores.html',
        controller: 'ModificarvaloresCtrl',
        controllerAs: 'modificarvalores'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/inforproyecto', {
        templateUrl: 'views/inforproyecto.html',
        controller: 'InforproyectoCtrl',
        controllerAs: 'inforproyecto'
      })
      // .when('/detalless', {
      //   templateUrl: 'views/detalles.html',
      //   controller: 'DetallesCtrl',
      //   controllerAs: 'detalles'
      // })
      .when('/detalles', {
        templateUrl: 'views/detalles.html',
        controller: 'DetallesCtrl',
        controllerAs: 'detalles'
      })
      .when('/destallesproyecto', {
        templateUrl: 'views/destallesproyecto.html',
        controller: 'DestallesproyectoCtrl',
        controllerAs: 'destallesproyecto'
      })
      .otherwise({
        redirectTo: '/'
      });
     ChartJsProvider.setOptions({
      	chartColors:['#FF5252','#FF8A80'],
      	responsive: true
      });
      ChartJsProvider.setOptions('line',{
      	showlines: false
      });
  });
