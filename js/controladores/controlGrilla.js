miApp.controller('controlGrilla', function($scope, $state,i18nService, uiGridConstants,$auth,factoryUsuario) {

if($auth.isAuthenticated())
$scope.user = $auth.getPayload();
console.info($scope.user);

$scope.Desloguear = function(){


        $auth.logout();
        alert("SE ESTA DESLOGUEANDO, SE REDIRECCIONARA AL INICIO");
        $state.go("inicio");
      }

 $scope.locales = {};
$scope.Borrar = function(row){
  console.info(row);

factoryUsuario.Borrar(JSON.stringify(row.ID))
                .then(function(respuesta) {
                  $scope.gridOptions.data= respuesta;
                    console.log(respuesta);
             
                });

}

$scope.Modificar = function(row){
factoryUsuario.Modificar(JSON.stringify(row))
                .then(function(respuesta) {
                  $scope.gridOptions.data= respuesta;
                    console.log(respuesta);
             
                });


}
factoryUsuario.TraerTodosLosUsuarios().
then(function(respuesta)
{
$scope.locales = respuesta;
});

        $scope.gridOptions = {};
        $scope.gridOptions.enableCellEditOnFocus = true;
        $scope.gridOptions.enableCellEdit = true;
        $scope.gridOptions.paginationPageSizes = [25, 50, 75];
            $scope.gridOptions.enableFiltering = true;
        // Configuracion de la paginacion
       $scope.gridOptions.paginationPageSize = 25;
    
          $scope.gridOptions.columnDefs = columADM();

   $scope.gridOptions.enableFiltering = true;
    // Configuracion del idioma.
    i18nService.setCurrentLang('es');

  factoryUsuario.TraerTodosLosUsuarios()
                .then(function(respuesta) {
                  console.info(respuesta);
                  $scope.gridOptions.data= respuesta;
             
                });


function columADM () {
  return [
          { field: 'ID', name: 'ID'},

        { field: 'Usuario', name: 'Usuario'},
        { width: 100, cellTemplate:"<button ng-Click='grid.appScope.Modificar(row.entity)'>MODIFICAR", name:"MODIFICAR",enableCellEdit: false
        },
        { width: 100, cellTemplate:"<button ng-Click='grid.appScope.Borrar(row.entity)'>BORRAR", name:"BORRAR",enableCellEdit: false
        }
        ,

        ];
    
  
    }

  
})
