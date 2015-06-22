(function() {
  'use strict';

  angular
    .module('vent')
    .directive('project', project);

  /** @ngInject */
  function project() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/portfolio/portfolio.html',
      controller: ProjectController,
      controllerAs: 'self',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ProjectController() {
      var self = this;
      
    }
  }

})();
