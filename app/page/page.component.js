(function () {
  'use strict';

  angular.module('myFirstApp')
    .component('pageView', {
      templateUrl: 'app/page/view/page.tmpl.html',
      controllerAs: 'view',
      controller: PageController,
      bindings: {
        page: '<'
      }
    });

  PageController.$inject = [];
  function PageController(){
    var vm = this;

    vm.$onInit = function() {

    };

  }
})();
