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
      .state('details', {
        url: '/project:index',
        templateUrl: 'app/projects/project.html',
        controller: 'ProjectController',
        controllerAs: 'project'
      })
      .state('offer', {
        url: '/offer',
        templateUrl: 'app/offer/offer.html',
        controller: 'OfferController',
        controllerAs: 'offer'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactController',
        controllerAs: 'contact'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'app/errors/404.html'
      })


    $urlRouterProvider.otherwise('/404');
  }

})();
