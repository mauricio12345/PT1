'use strict';

/**
 * @ngdoc service
 * @name ebarrioApp.almacenador
 * @description
 * # almacenador
 * Factory in the ebarrioApp.
 */
angular.module('ebarrioApp')
  .factory('almacenador', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      getMethod: function () {
        return meaningOfLife;
      },
      setMetohd: function(variable) {
        meaningOfLife = variable;
      }



    };
  });
