
miApp.service('ABM', function ($http,factoryRutas,Grilla) {
        
var Url = factoryRutas.ApiUrl;

  this.Insertar = Insertar;
  function Insertar(objeto){
    return $http.put(Url + "usuarios/alta/"+ objeto)
      .then(function(respuesta) {
       return respuesta.data

    })      // FIN DEL RETURN


  }//FIN IF QUE TRAER CLIENTES

    this.TraerObjeto = TraerObjeto;
  function TraerObjeto(objeto){
    return $http.get(Url +"usuarios/validar/"+ objeto)
      .then(function(respuesta) { 
      console.info(respuesta.data);    
       return respuesta.data

    })

    }

  
   this.Borrar = Borrar;
   function Borrar(id){
    console.info(id);
    return $http.delete(Url + "usuarios/borrar/" + id) 
    .then(function(respuesta) {
      console.info(respuesta);
      return Grilla.TraerTodosLosUsuarios();
    });
   };


  this.Modificar = Modificar;
  function Modificar(objeto){
    console.info(objeto);
    return $http.post(Url + "usuarios/modificar/"+ objeto)
      .then(function(respuesta) {
      console.info(respuesta); 
       return respuesta.data

    })      // FIN DEL RETURN

};


  


  })