(function () {
  'use strict';

  angular.module('myFirstApp')
    .component('sectionArea', {
      templateUrl: 'app/section-area/view/section.area.tmpl.html',
      controllerAs: 'view',
      controller: SectionController,
      bindings: {
        section: '<',
        tab: '<'
      }
    });

  SectionController.$inject = [];
  function SectionController(){
    var vm = this;
  }

})();
