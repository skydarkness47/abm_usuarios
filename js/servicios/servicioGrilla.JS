miApp.service('Grilla', function ($http,factoryRutas) {
        
var Url = factoryRutas.ApiUrl;

  this.TraerTodosLosUsuarios = TraerTodosLosUsuarios;
  function TraerTodosLosUsuarios(){

    return $http.get(Url + 'usuarios')
      .then(function(respuesta) { 
       return respuesta.data

    });// FIN DEL RETURN


  };//FIN IF QUE TRAER CLIENTES



 

    this.borrarUsuario = borrarUsuario;
   function borrarUsuario(id){
    return $http.delete(Url + "usuarios/borrar/" + id) 
    .then(function(respuesta) {
      console.info(respuesta);
      return TraerTodosLosUsuarios();
    });
   };

   this.ModificarUsuario = ModificarUsuario;
   function ModificarUsuario(obj){
    return $http.post(Url + "usuarios/modificar/" + obj) 
    .then(function(respuesta) {
      console.info(respuesta);
      return TraerTodosLosUsuarios();
    });
   };





})