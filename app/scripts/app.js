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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  });