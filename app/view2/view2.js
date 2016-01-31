'use strict';
define([
	'angular',
	'angularUiRoute',
	'components/version/version'
], function(angular) {
	angular.module('myApp.view2', ['ui.router', 'myApp.version'])
	.config(function($stateProvider, $urlRouterProvider) {
	  $stateProvider
	    .state('view2', {
	      url: "/view2",
	      templateUrl: "view2/view2.html",
	      controller : 'View2Ctrl'
	    });
	})
	.controller('View2Ctrl', ['$scope', '$injector', function($scope, $injector) {
		require(['view2/ctrl2'], function(ctrl2) {
			$injector.invoke(ctrl2, this, {'$scope': $scope});
		});
	}]);
});