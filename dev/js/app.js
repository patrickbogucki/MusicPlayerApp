var app = angular.module('MusicPlayerApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'MainController',
			templateUrl: 'dev/views/main.html'
		})
		.when('/search', {
			controller: 'SearchController',
			templateUrl: 'dev/views/search.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});