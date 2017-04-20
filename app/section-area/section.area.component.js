(function () {
  'use strict';

  angular.module('myFirstApp')
    .component('sectionArea', {
      templateUrl: 'app/section-area/view/section.area.tmpl.html',
      controllerAs: 'view',
      controller: SectionController,
      bindings: {
        section: '<'
      }
    });

  SectionController.$inject = [];
  function SectionController(){
    var vm = this;

    vm.$onInit = function() {
      vm.section = section;
    };

  }

  var section = {};
  section.title = 'This is my title';
  section.description = 'This is a custom description that can be used to do things';
  section.picture = 'img/pexels-photo-70292.jpeg';
})();
