(function() {
  'use strict';

  angular
    .module('vent')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
