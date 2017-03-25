miApp.controller("controlInicio",function($scope,$auth,$state){
$scope.user = {};
   if($auth.isAuthenticated())
    {
      $scope.user = $auth.getPayload();
    }else if(!($auth.isAuthenticated())){
      $state.go("inicio");
    }
    console.info($scope.user);
$scope.Desloguear = function(){


        $auth.logout();
        alert("SE ESTA DESLOGUEANDO, SE REDIRECCIONARA AL INICIO");
        $state.go("inicio");
      }

});