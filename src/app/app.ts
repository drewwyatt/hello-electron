/// <reference path="_all.ts" />
module app {
	angular.module('hello-electron', ['ui.router'])
		.controller('HelloController', hello.HelloController)
		.config(config);
}
