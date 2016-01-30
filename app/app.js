'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/view1");
});