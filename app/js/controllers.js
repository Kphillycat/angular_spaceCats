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
spacecatApp.controller('CatListCtrl', function($scope){
	//cats is the resource we want to access to when defining the controller. in ng-repeat
	//Can assign scope a resource
	//cats expects an array (prolly of objs)
	//Scope is object that gives
	//Can add resource thru controller function
	$scope.cats = [
    { "id": 1,
      "name": "bigbelly",
      "bio": "Emerged into consciousness how far away shores of the cosmic ocean Cambrian explosion",
      "color": "white",
      "personality": "relaxed",
      "planets": 2},
    { "id": 2,
      "name": "keyboard",
      "bio": "decipherment from which we spring tendrils of gossamer clouds quasar ship of the imagination rings of Uranus",
      "color": "grey",
      "personality": "nervous",
      "planets": 45},
    { "id": 3,
      "name": "laser",
      "bio": "stirred by starlight, gathered by gravity worldlets Jean-François Champollion at the edge of forever billions",
      "color": "grey",
      "personality": "aggresive",
      "planets": 666},
    { "id": 4,  
      "name": "lounge",
      "bio": "Flatland not a sunrise but a galaxyrise emerged into consciousness a mote of dust suspended in a sunbeam globular star cluster",
      "color": "grey",
      "personality": "relaxed",
      "planets": 1},
    { "id": 5,
      "name": "ohno",
      "bio": "Euclid preserve and cherish that pale blue dot Jean-François Champollion network of wormholes",
      "color": "orange",
      "personality": "nervous",
      "planets": 1337},
    { "id": 6,
      "name": "yucky",
      "bio": "The only home we've ever known dream of the mind's eye, prime number.",
      "color": "brown",
      "personality": "relaxed",
      "planets": 7}
  ]
});