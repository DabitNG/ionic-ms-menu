/**
* Menu Module. 
* @author DabitNG 
*/

angular.module('menu', [])

	/**
	* Global configuration for this module
	* Configure your diferentet views here
	* @param $stateProvider 
	* @param $urlRouterProvider
	* @return
	*/
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
					templateUrl: 'modules/menu/templates/home.html',
				}
			}
		})

		.state('app.search', {
			url: '/search',
			views: {
				'menuContent':{
					templateUrl: 'modules/menu/templates/search.html',
				}
			}
		});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/home');
});