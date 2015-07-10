(function() {
  'use strict';

  angular
    .module('vent')
    .directive('project', project);

  /** @ngInject */
  function project() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/portfolio/portfolio.html'
    };
    return directive;
  }
})();
