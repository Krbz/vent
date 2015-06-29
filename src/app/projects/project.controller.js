(function() {
  'use strict';

  angular
    .module('vent')
    .controller('ProjectController', ProjectController)
    .directive('projects', projects)

  /** @ngInject */
  function ProjectController($scope, $stateParams, mainData) {
    $scope.index = $stateParams.index;

    return mainData;
  }

  function projects() {
    var directive = {
      restrict: 'A',
      templateUrl: 'app/components/portfolio/portfolio.html',
      bindToController: true
    };

    return directive;
  }

})();
