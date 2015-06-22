(function() {
  'use strict';

  angular
    .module('vent')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, mainData) {
    var self = this;


    self.datas = [];

    function getData() {
      self.datas = mainData;

      angular.forEach(self.datas, function(data) {
        data.rank = Math.random();
      });

    }
    getData();
  }
})();
