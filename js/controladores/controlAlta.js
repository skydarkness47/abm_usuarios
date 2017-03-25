miApp.controller("controlAlta",function($scope,$auth,$state,factoryUsuario){
	
//inicio las variables
    if($auth.isAuthenticated())
    {
      $scope.user = $auth.getPayload();
    }else if(!($auth.isAuthenticated())){
      $state.go("inicio");
    }

 $scope.usuario ={};
console.info($scope.user);

$scope.Desloguear = function(){


        $auth.logout();
        alert("SE ESTA DESLOGUEANDO, SE REDIRECCIONARA AL INICIO");
        $state.go("inicio");
      }
  factoryUsuario.TraerTodosLosUsuarios()
                .then(function(respuesta) {
                  $scope.listaUsuarios ={};
                  $scope.listaUsuarios = respuesta;
             
                });
      
	
  $scope.Alta=function(){
  
  
$scope.usuario.rol = $scope.tipo;
       
     
  	   factoryUsuario.Insertar(JSON.stringify($scope.usuario)) //+ JSON.stringify($scope.persona))
			  .then(function(respuesta) {
            alert("SE DIO DE ALTA CORRECTAMENTE"); 
            $state.go("menu.grilla");
         

				
	});
}


})