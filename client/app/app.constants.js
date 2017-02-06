'use strict';

import angular from 'angular';

export default angular.module('momsmeetApp.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
