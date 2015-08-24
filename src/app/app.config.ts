/// <reference path="_all.ts" />
module app {
	export function config($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
		$urlRouterProvider.otherwise("/hello");
		$stateProvider
			.state('hello', {
				url: "/hello",
				templateUrl: "assets/html/hello.html",
				controller: 'HelloController as vm'
			});
	};
}
