angular.module('starter.routes', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/side/home');

	$stateProvider
		.state('sidemenu', {
			url : '/side',
			abstract : true,
			templateUrl : 'templates/side-menu.html'
		})

		.state('sidemenu.home',{
			url : '/home',
			views: {
				//Investigate why we cannot have a simple template Url
				'menuContent' : {
					templateUrl : 'templates/home.html'
				}
			}
		})
		.state('sidemenu.nav',{
			url: '/nav',
			views: {
				'menuContent':{
					templateUrl : 'templates/map.html',
					controller : 'NavCtrl'
				}
			}
		})
});