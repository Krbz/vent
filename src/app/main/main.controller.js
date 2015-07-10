(function() {
  'use strict';

  angular
    .module('vent')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, mainData) {
    var self = this;
        self.datas = [];      

    // for (var i=0; i > cols.length; i++) {
      // cols[i].style.opacity = '1';
      // console.log('cols', cols.length);
    // };

    function modifyData() {
      self.datas = mainData;

      angular.forEach(self.datas, function(data) {
        data.rank = Math.random();
      });
    }
    function z(){
      var z = false;
      z === false ? console.log('true', z) : console.log('false', z)
    }
    z();
    modifyData();
  }
})();
