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

  PageController.$inject = ['$stateParams'];
  function PageController($stateParams){
    var vm = this;

    vm.$onInit = function() {
      vm.page = {};
      vm.page = pages[$stateParams.page||'landing'];
    };

  }

  var pages = {
    landing: {
      sections: [
        {
          title: 'This is my title 1',
          subtitle: 'This is my subtitle 1',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-70292.jpeg',
          columns: [
            {
              title: 'Title Col1',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            },            {
              title: 'Title Col2',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            },            {
              title: 'Title Col3',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            }
          ]
        },
        {
          title: 'This is my title 2',
          subtitle: 'This is my subtitle 2',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-57825.jpeg',
          columns: [
            {
              title: 'Title Col1',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            },            {
              title: 'Title Col2',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            },            {
              title: 'Title Col3',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            }
          ]

        },
        {
          title: 'This is my title 3',
          subtitle: 'This is my subtitle 3',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-196846.jpeg'
        },
      ]
    },
    descubre: {
      sections: [
        {
          title: 'This is my Descubre title 1',
          subtitle: 'This is my subtitle 1',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-57825.jpeg'
        },
        {
          title: 'This is my title 2',
          subtitle: 'This is my subtitle 2',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-70292.jpeg',
          columns: [
            {
              title: 'Title Col1',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            },            {
              title: 'Title Col2',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            },            {
              title: 'Title Col3',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            }
          ]

        },
        {
          title: 'This is my title 3',
          subtitle: 'This is my subtitle 3',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-196846.jpeg'
        },
      ]
    },
    energia: {
      sections: [
        {
          title: 'This is my title 1',
          subtitle: 'This is my subtitle 1',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-196846.jpeg'
        },
        {
          title: 'This is my title 2',
          subtitle: 'This is my subtitle 2',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-70292.jpeg'
        },
        {
          title: 'This is my title 3',
          subtitle: 'This is my subtitle 3',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-57825.jpeg',
          columns: [
            {
              title: 'Title Col1',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            },            {
              title: 'Title Col2',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            },            {
              title: 'Title Col3',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            }
          ]

        },
      ]
    },
    cercadeti: {
      sections: [
        {
          title: 'This is my title 1',
          subtitle: 'This is my subtitle 1',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-196846.jpeg',
          columns: [
            {
              title: 'Title Col1',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            },            {
              title: 'Title Col2',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            },            {
              title: 'Title Col3',
              description: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.'
            }
          ]

        },
        {
          title: 'This is my title 2',
          subtitle: 'This is my subtitle 2',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-57825.jpeg'
        },
        {
          title: 'This is my title 3',
          subtitle: 'This is my subtitle 3',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-70292.jpeg'
        },
      ]
    },
    movement: {
      sections: [
        {
          title: 'This is my title 1',
          subtitle: 'This is my subtitle 1',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-196846.jpeg'
        },
        {
          title: 'This is my title 2',
          subtitle: 'This is my subtitle 2',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-57825.jpeg'
        },
        {
          title: 'This is my title 3',
          subtitle: 'This is my subtitle 3',
          description: 'This is a custom description that can be used to do things',
          picture: 'img/pexels-photo-70292.jpeg'
        },
      ]
    }
  };

})();
