miApp.service('factoryUsuario', function (Login,ABM,factoryRutas,Grilla) {
objeto = {};
   objeto.nombre = "factory de login y abm";
  objeto.InsertarLocal = InsertarLocal;
objeto.TraerTodosLosUsuarios=TraerTodosLosUsuarios;
objeto.Borrar = Borrar;
objeto.Modificar =Modificar;

   return objeto;



  function InsertarLocal(parametro)
  {
    return ABM.InsertarLocal(parametro);

  }

  function TraerTodosLosUsuarios()
  {
        return Grilla.TraerTodosLosUsuarios();

  }

  function Borrar(id)
  {
        return ABM.Borrar(id);

  }
 function Modificar(user)
  {
        return ABM.Modificar(user);

  }


})