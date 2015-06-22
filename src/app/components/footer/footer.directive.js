(function() {
  'use strict';

  angular
    .module('vent')
    .directive('footer', footer);

  /** @ngInject */
  function footer() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      controllerAs: 'self',
      bindToController: true
    };

    return directive;

  }

})();
