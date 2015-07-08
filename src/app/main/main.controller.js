(function() {
  'use strict';

  angular
    .module('vent')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, mainData) {
    var self = this

    // console.log('cols', cols.length);
    // for (var i=0; i > cols.length; i++) {
      // cols[i].style.opacity = '1';
      // console.log('cols', cols.length);
    // };

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
