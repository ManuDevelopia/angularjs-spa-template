(function () {
  'use strict';

  angular.module('myFirstApp')
    .component('tabsArea', {
      templateUrl: 'app/section-area/view/tabs.area.tmpl.html',
      controllerAs: 'view',
      controller: TabsController,
      bindings: {
        tabs: '<',
        tab: '<'
      }
    });

  TabsController.$inject = [];
  function TabsController(){
    var vm = this;
    var tabNumber = 0;

    vm.$onInit = function(){
      vm.tab = vm.tabs[tabNumber];
    };

    vm.left = function(){
      if(tabNumber > 0){
        tabNumber--;
      }
      vm.tab = vm.tabs[tabNumber];
    };

    vm.right = function(){
      if(tabNumber < vm.tabs.length - 1){
        tabNumber++;
      }
      vm.tab = vm.tabs[tabNumber];
    };

  }

})();
