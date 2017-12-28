'use strict';

// routes.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider'];
//
// export default function routes($stateProvider, $urlRouterProvider, $locationProvider) {
//   console.log('In routers');
//   console.log('state provider: ', $stateProvider);
//   $stateProvider
//     .state('home', {
//       url: '/home',
//       template:  require('../app/templates/index.html')
//     });
//
//   $urlRouterProvider.otherwise('/home');
// }


routes.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

export default function routes($urlRouterProvider, $stateProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: require('templates/index.html'),
      controller: ''
    });



  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/home');
}
