'use strict';
// @flow

import angular from 'angular';

type User = {
  name: string;
  email: string;
  password: string;
};

export default class UsersController {
  user: User = {
    name: '',
    email: '',
    password: ''
  };
  errors = {};
  submitted = false

  $http;
  socket;
  Auth;
  $state;
  users: Object[];
  /*@ngInject*/
  constructor(Auth, User, $state, $http, socket) {
    this.$http = $http;
    this.socket = socket;
    this.Auth = Auth;
    this.User = User;
    this.$state = $state;
    // Use the User $resource to fetch all users
    this.users = User.query();
    this.userFilt = {name: '', role: ''};

  }

  delete(user) {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    }

  selectRole(role) {
    this.userFilt.role = role;
  }

  $onInit() {
      this.$http.get('/api/users/roles')
        .then(response => {
          this.userRoles = response.data;
        });
  }

  register(form) {
    this.submitted = true;

    if(form.$valid) {
      return this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password
      })
        .then(() => {
          // Account created, redirect to home
          this.$state.go('dash.users.list');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }

}
