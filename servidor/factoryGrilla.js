miApp.service('factoryGrilla', function (Grilla) {
var objeto = {};
   objeto.TraerTodos= TraerTodos;
  objeto.borrar= borrar;
  objeto.TraerTodosUsuarios= TraerTodosUsuarios;
  objeto.borrarUsuario = borrarUsuario;
  objeto.Modificar = Modificar;


   return objeto;

   function TraerTodos()
   {
   
      return  Grilla.TraerTodos();
   }

   function borrar(obj)
   {
   
      return  Grilla.borrar(obj);
   }

   function Modificar(obj)
   {
 
      return  Grilla.Modificar(obj);
   }


   function TraerTodosUsuarios()
   {
      return Grilla.TraerTodosUsuarios();

   }

  
  })//cierro factory
