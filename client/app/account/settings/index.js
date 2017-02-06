'use strict';

import angular from 'angular';
import SettingsController from './settings.controller';

export default angular.module('momsmeetApp.settings', [])
  .controller('SettingsController', SettingsController)
  .name;
