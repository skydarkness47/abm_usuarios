miApp.controller("controlAlta",function($scope,$auth,$state,factoryUsuario){
	
//inicio las variables
    if($auth.isAuthenticated())
$scope.user = $auth.getPayload();

console.info($scope.user);

$scope.Desloguear = function(){


        $auth.logout();
        alert("SE ESTA DESLOGUEANDO, SE REDIRECCIONARA AL INICIO");
        $state.go("inicio");
      }

      
	
  $scope.Alta=function(){
    
  	   factoryUsuario.Insertar(JSON.stringify($scope.usuario)) //+ JSON.stringify($scope.persona))
			  .then(function(respuesta) {
            alert("SE DIO DE ALTA CORRECTAMENTE"); 
            $state.go("menu.grilla");
         

				
	});
}


})