(function(){
	'use strict';

	angular.module('ogtemplate', [ 'ngRoute','ogtemplate-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
})();
