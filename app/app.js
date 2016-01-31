'use strict';
define([
	'angular',
	'angularUiRoute',
	'view1/view1',
	'view2/view2'
], function(angular, angularUiRoute, view1, view2) {
	return angular.module('myApp', [
		'ui.router',
		'myApp.view1',
		'myApp.view2'
	]).
	config(function($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise("/view1");
	});
});

