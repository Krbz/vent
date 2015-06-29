(function() {
  'use strict';

  angular
    .module('vent')
    .config(config);

  function config($logProvider) {
    $logProvider.debugEnabled(false);
  }

})();
