miApp.controller("controlLogin",function($scope,$state,$auth,factoryLoginABM){

			
$scope.usuario  = {};
$scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

$scope.Desloguear = function(){


        $auth.logout();
        alert("SE ESTA DESLOGUEANDO, SE REDIRECCIONARA AL INICIO");
        $state.go("inicio");
      }
      
if($auth.isAuthenticated())
	console.info("Token",$auth.getPayload());
else
	console.info("No Token",$auth.getPayload());


$scope.Logueo = function(){

factoryLoginABM.validarLogin(JSON.stringify($scope.usuario))

 .then(function(respuesta) {    
 	

 				if(respuesta != true)
			{
				$scope.usuario  = {};
				console.log("no entro");
			}else{
			
				console.log("entro");
			

factoryLoginABM.TraerObjeto(JSON.stringify($scope.usuario))
 		 	.then(function(respuesta) { 
 		 		$scope.user = {};
 		 		$scope.user.usuario = respuesta.Usuario;
 		 		$scope.user.id= respuesta.ID;
 		 		$scope.user.clave=respuesta.Clave;

			$auth.login(JSON.stringify($scope.user))

  				.then(function(response) {
 			 		if($auth.isAuthenticated()){
				  			$state.go("inicio");
							console.info("Token Validado", $auth.getPayload());
							$scope.usuario  = {};
						}
						else
							console.info("No Token Valido",$auth.getPayload());
				    		$scope.usuario  = {};
  	})
  	.catch(function(response) {
    	console.info("no",response);
  	});


		},function errorCallback(response) {
				 $scope.ListadoPersonas= [];
				console.log( response);
		 });

			
		}
	    	
  	});

}



});
