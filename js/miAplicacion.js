var miApp = angular.module(
	"AngularABM",
	[
	"ui.router",
	'satellizer',
    'ui.grid',
    'ui.grid.pagination',
    'ui.grid.resizeColumns',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ui.grid.edit'
	])







miApp.controller("controlPersonaAlta",function($scope,$state){


$scope.IraAlta = function(){
$state.go("persona.Alta");
}
$scope.IraGrilla = function(){
	$state.go("persona.Grilla");
}



});
miApp.controller("controlPersonaGrilla",function($scope,$state){



$scope.IraAlta = function(){
$state.go("persona.Alta");
}
$scope.IraGrilla = function(){
	$state.go("persona.Grilla");
}


});


miApp.controller("ControlRegistro",function($scope,$state){





});

