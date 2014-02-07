'use strict';

//variable need needs to match ng-app
var spacecatApp = angular.module('spacecatApp', []);
//This sets the scope of app to be stored in an array
//this creates application

//Next build controller, as function property off application
//controller 2 parameters, 1) name of controller has to match in html, 2) parameter is an annonymous function
//annon func takes a global variable called scope that connects the app to the controller
//scope is a place to store resrouces.
//controller gives context to bind view with data
//we want the controller to be a property of the Application so we do [Appname].controller
spacecatApp.controller('CatListCtrl', function($scope, $http){ 
	//cats is the resource we want to access to when defining the controller. in ng-repeat
	//Can assign scope a resource
	//cats expects an array (prolly of objs)
	//Scope is object that gives
	//Can add resource thru controller function
	$http.get('cats/cats.json').success(function(data){ //takes implicit variable
		$scope.cats = data;
	});

	//We can do default values in the controller
	//orderProp belongs to the scope
	$scope.orderProp = 'name';
	
});