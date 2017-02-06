'use strict';

import angular from 'angular';
import DashController from './dash.controller';

export default angular.module('momsmeetApp.dash', [])
  .controller('DashController', DashController)
  .name;
