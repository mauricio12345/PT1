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
      .when('/about/:id', {
        templateUrl: 'views/about.html',
        controller: 'ViewCtrl',
        controllerAs: 'about'
      })
      .when('/mapa', {
        templateUrl: 'views/mapa.html',
        controller: 'MapaCtrl',
        controllerAs: 'mapa'
      })
      // .when('/registro', {
      //   templateUrl: 'views/registro.html',
      //   controller: 'RegistroCtrl',
      //   controllerAs: 'registro'
      // })
      .when('/registro', {
        templateUrl: 'views/registro.html',
        controller: 'AddUserCtrl',
        controllerAs: 'registro'
      })
      .when('/exito', {
        templateUrl: 'views/exito.html',
        controller: 'ExitoCtrl',
        controllerAs: 'exito'
      })
      .when('/proyectos', {
        templateUrl: 'views/proyectos.html',
        controller: 'ViewCtrl',  //
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
      .when('/listaproyectos', {
        templateUrl: 'views/listaproyectos.html',
        controller: 'CreateCtrl',
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
      .when('/destallesproyecto/:id', {
        templateUrl: 'views/destallesproyecto.html',
        controller: 'ViewCtrl',
        controllerAs: 'destallesproyecto'
      })
      .when('/editar/:id', {
        templateUrl: 'views/editar.html',
        controller: 'EditCtrl',
        controllerAs: 'editar'
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
  })
.controller('HomeCtrl', ['$scope', 'Proyectos', '$route', function ($scope, Proyectos, $route) {
  var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
        Proyectos.get(function (data) {
            $scope.proyectos = data.response;
        })

        $scope.remove = function (id) {
            Proyectos.delete({id: id}).$promise.then(function (data) {
                if (data.response) {
                    $route.reload();
                }
            })
        }
    }])

    .controller('CreateCtrl', ['$scope', 'Proyectos', function ($scope, Proyectos) {
      var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
        $scope.settings = {
            pageTitle: "Agregar Proyecto",
            action: "Agregar"
        };

        
        $scope.proyecto = {
            idproyecto: "",
            descripcion: "",
            region: "",
            ciudad: "",
            estado: "",
            requisito: "",
            ahorro: "",
            duracion: ""
        };

        $scope.submit = function () {
            Proyectos.save({proyecto: $scope.proyecto}).$promise.then(function (data) {
                if (data.response) {
                    angular.copy({}, $scope.proyecto);
                    $scope.settings.success = "El Proyecto ha sido creado correctamente!";
                    alert("El proyecto ha sido guardado con exito");
                     window.location.href='#!/listaproyectos';
                }
                else{
                  alert("no se pudo guardar el proyecto");
                }
            })
        }
    }])

    .controller('EditCtrl', ['$scope', 'Proyectos', '$routeParams', function ($scope, Proyectos, $routeParams) {
      var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
        $scope.settings = {
            pageTitle: "Editar Proyectos",
            action: "Editar"
        };

        var id = $routeParams.id;

        Proyectos.get({id: id}, function (data) {
            $scope.proyecto = data.response;
        });

        $scope.submit = function () {
            Proyectos.update({proyecto: $scope.proyecto}, function (data) {
                $scope.settings.success = "El usuario ha sido editada correctamente!";
                alert("El proyecto ha sido editado con exito");
                     window.location.href='#!/listaproyectos';
            });
        }
    }])

    .controller('AddUserCtrl', ['$scope', 'Proyectos', 'Usuarios', '$route', function ($scope, Proyectos, Usuarios, $route) {
      var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
        Usuarios.get(function (data) {
            $scope.proyecto = data.response;
        })

        $scope.settings = {
            pageTitle: "Agregar usuario a un Proyecto",
            action: "Agregar"
        };

        $scope.usuario = {
            idusuario: "",
            nombre: "",
            apellido: "",
            contrasena: "",
            correo: ""
        };

        $scope.submit = function () {
            Usuarios.save({usuario: $scope.usuario}).$promise.then(function (data) {
                if (data.response) {
                    angular.copy({}, $scope.proyecto);
                    $scope.settings.success = "El usuario ha sido vinculado correctamente!";
                }
            })
        }
    }])

    .controller('ViewCtrl', ['$scope', 'Proyectos', 'Usuarios', 'Participante','$routeParams', '$route', function ($scope, Proyectos, Usuarios, Participante, $routeParams, $route) {
      var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
        var id = $routeParams.id;

        Usuarios.get({id: id}, function (data) {
            $scope.usuario = data.response;
        });

        Proyectos.get({id: id}, function (data) {
            console.log(data.response);
            $scope.proyecto = data.response;
        });

        Participante.get({id: id}, function (data) {
            console.log(data.response);
            $scope.participante = data.response;
        })

        $scope.remove = function (id) {
            Proyectos.delete({id: id}).$promise.then(function (data) {
                if (data.response) {
                    $route.reload();
                }
            })
        }
    }])

    .factory('Usuarios', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/BarrioAPI/usuarios/id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])

    .factory('Proyectos', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/BarrioAPI/proyectos/:id', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])
    .factory('Participante', ['$resource', function ($resource) {
        return $resource('http://localhost:8080/BarrioAPI/participantes/', {id: "@_id"}, {
            update: {method: "PUT", params: {id: "@_id"}}
        })
    }])

