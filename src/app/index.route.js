(function() {
  'use strict';

  angular
    .module('vent')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('offer', {
        url: '/offer',
        templateUrl: 'app/contact/contact.html',
        controller: 'OfferController',
        controllerAs: 'offer'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/contact/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })


    $urlRouterProvider.otherwise('/');
  }

})();
