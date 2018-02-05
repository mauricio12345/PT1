'use strict';

/**
 * @ngdoc function
 * @name ebarrioApp.controller:InicioCtrl
 * @description
 * # InicioCtrl
 * Controller of the ebarrioApp
 */
angular.module('ebarrioApp')
  .controller('InicioCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var vm=this;
    vm.menutemplate={
      url:'views/menu.html'
    };
     $scope.usuario= sessionStorage.getItem("usuario");
    toastr.success('Bienvenido '+ $scope.usuario );
   $(document).ready(function(){ 
                
                    $.ajax({
                        type:'get',
                        url:'user.php',
                        data:'nombre='+$scope.usuario,
                        success:function(data){

                            var valores = eval(data);

                            var e   = valores[0];
                            console.log("id:::");
                            console.log(e);
                        }
                    });
                    return false;});

    // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();
 // Show sideNav
  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');
  // Destroy sideNav
  $('.button-collapse').sideNav('destroy');
  
     $(document).ready(function(){
      
    $('.slider').slider();
      // Pause slider
    $('.slider').slider('pause');
    // Start slider
    $('.slider').slider('start');
    // Next slide
    $('.slider').slider('next');
    // Previous slide
    $('.slider').slider('prev');
      });
  });
