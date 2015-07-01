(function() {
  'use strict';

  angular
    .module('vent')
    .controller('ProjectController', ProjectController)
    .directive('projects', projects);

  /** @ngInject */
  function ProjectController($scope, $stateParams, mainData) {
    $scope.index = $stateParams.index;

    var aside = document.querySelector('aside');

    document.addEventListener('scroll', function() {
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      if (top < 400) {
        aside.classList.remove('sticky');
      } else {
        aside.classList.add('sticky');
      }

    });

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
