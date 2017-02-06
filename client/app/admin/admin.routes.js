'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('dash', {
    url: '/dash',
    template: require('./dash/dash.html'),
    controller: 'DashController',
    authenticate: 'admin'
  }).state('dash.users', {
    url: '/users',
    template: require('./users/users.html'),
    controller: 'UsersController',
    controllerAs: 'users',
    authenticate: 'admin'
  })
  .state('dash.users.list', {
    url: '/list',
    template: require('./users/users.list.html'),
    controller: 'UsersController',
    controllerAs: 'users',
    authenticate: 'admin'
  })
  .state('dash.users.new', {
    url: '/new',
    template: require('./users/users.new.html'),
    controller: 'UsersController',
    controllerAs: 'users',
    authenticate: 'admin'
  });
}
