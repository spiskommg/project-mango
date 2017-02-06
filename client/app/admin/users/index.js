'use strict';

import angular from 'angular';
import UsersController from './users.controller';

export default angular.module('momsmeetApp.users', [])
  .controller('UsersController', UsersController)
  .name;
