(function(){
  'use strict';


  angular.module('ogtemplate-main',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainCtrl'
        });
    })
    .filter('escape', function() {
    	return function(input) {
		input = input || "";
		return input.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	};
    })
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });

})();
