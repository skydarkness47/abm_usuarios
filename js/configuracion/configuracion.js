miApp.config(function($stateProvider,$urlRouterProvider,$authProvider){

$authProvider.loginUrl = 'abm_usuarios/servidor/jwt/php/auth.php';
$authProvider.signupUrl = '/auth/signup';
$authProvider.unlinkUrl = '/auth/unlink/';
$authProvider.tokenName = 'usuario';
$authProvider.tokenPrefix = 'usuario';
$authProvider.authHeader = 'data';
$authProvider.tokenHeader = 'Authorization';
$authProvider.httpInterceptor = function() { return true; },
$authProvider.withCredentials = false;
$authProvider.tokenRoot = null;


$stateProvider
		.state(
			"inicio",{
				url: "/inicio",
				templateUrl: "./formularios/inicio.html",
				controller:"controlInicio"
			})
			.state(
			"menu",{
				url:"/menu",
				abstract:true,
				templateUrl:"./formularios/abstractoMenu.html"

			})
			.state(
			"menu.grilla",{
				url:"/grilla",
				views: {
					"menu":{
					templateUrl:"./formularios/grilla.html",
					controller:"controlGrilla"
						}
				}
			}).state(
			"menu.login",{
				url:"/login",
				views: {
					"menu":{
					templateUrl:"./formularios/login.html",
					controller:"controlLogin"
						}
				}
			}).state(
			"menu.alta",{
				url:"/alta",
				views: {
					"menu":{
					templateUrl:"./formularios/alta.html",
					controller:"controlAlta"
						}
				}
			})
		$urlRouterProvider.otherwise("/inicio");

});
