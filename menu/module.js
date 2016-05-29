angular.module('menu', [])

	.config(function($stateProvider, $urlRouterProvider) {
	  $stateProvider

	  .state('app', {
	    url: '/app',
	    abstract: true,
	    templateUrl: 'modules/menu/templates/menu.html',
	  })

	  .state('app.home', {
	    url: '/home',
	    views: {
	      'menuContent':{
	        templateUrl: 'modules/myModule/templates/home.html',
	      }
	    }
	  });

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/home');
});