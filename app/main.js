'use strict';

if(window.__karma__) {
	var allTestFiles = [];
	var TEST_REGEXP = /spec\.js$/;

	var pathToModule = function(path) {
		return path.replace(/^\/base\/app\//, '').replace(/\.js$/, '');
	};

	Object.keys(window.__karma__.files).forEach(function(file) {
		if (TEST_REGEXP.test(file)) {
			allTestFiles.push(pathToModule(file));
		}
	});
}

require.config({
	paths: {
		angular: 'bower_components/angular/angular',
		uiRoute: 'bower_components/angular-ui-router/release/angular-ui-router',
		text: 'bower_components/requirejs-text/text'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'uiRoute': ['angular'],
	},
	priority: [
		"angular"
	],
	deps: window.__karma__ ? allTestFiles : [],
	callback: window.__karma__ ? window.__karma__.start : null,
	baseUrl: window.__karma__ ? '/base/app' : '',
});

require([
	'angular',
	'app'
	], function(angular, app) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			angular.bootstrap(document, ['myApp']);
		});
	}
);