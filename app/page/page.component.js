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
      vm.page = {};
      vm.page.sections = sections;
    };

  }

  var sections = [
    {
      title: 'This is my title 1',
      description: 'This is a custom description that can be used to do things',
      picture: 'img/pexels-photo-70292.jpeg'
    },
    {
      title: 'This is my title 2',
      description: 'This is a custom description that can be used to do things',
      picture: 'img/pexels-photo-57825.jpeg'
    },
    {
      title: 'This is my title 3',
      description: 'This is a custom description that can be used to do things',
      picture: 'img/pexels-photo-196846.jpeg'
    },
  ]
  ;
})();
