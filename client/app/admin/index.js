'use strict';

import angular from 'angular';
import routes from './admin.routes';
import users from './users';
import dash from './dash';
//import AdminController from './admin.controller';

export default angular.module('momsmeetApp.admin', ['momsmeetApp.auth', 'ui.router', users, dash])
  .config(routes)
  /*.controller('AdminController', AdminController)*/
  .name;
