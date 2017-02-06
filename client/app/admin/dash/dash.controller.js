'use strict';
// @flow



export default class DashController {

  /*@ngInject*/
  constructor(Auth, $state, $scope) {
    this.Auth = Auth;
    this.$state = $state;
    this.$scope = $scope;
    $scope.status = {
     isCustomHeaderOpen: false,
     isFirstOpen: true,
     isFirstDisabled: false
   };

  }

}
