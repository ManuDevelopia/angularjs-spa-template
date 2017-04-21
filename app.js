(function () {
  'use strict';

  // Do note declare any component here, do it in separate files
  angular.module('myFirstApp', ['ui.router']);

  angular.module('myFirstApp').config(RoutesConfig);


  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function RoutesConfig($stateProvider, $urlRoutesProvider, $locationProvider) {

    $urlRoutesProvider.otherwise('/landing');

    $stateProvider.state('landingPage', {
      url: '/:page',
      template: '<page-view></page-view>'
    });

    $locationProvider.html5Mode(true);
  }

})();
