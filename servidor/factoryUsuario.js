miApp.service('factoryUsuario', function (Login,ABM,factoryRutas,Grilla) {
objeto = {};
   objeto.nombre = "factory de login y abm";
  objeto.InsertarLocal = InsertarLocal;
objeto.TraerTodosLosUsuarios=TraerTodosLosUsuarios;
objeto.BorrarLocal = BorrarLocal;
objeto.ModificarLocal =ModificarLocal;

   return objeto;



  function InsertarLocal(parametro)
  {
    return ABM.InsertarLocal(parametro);

  }

  function TraerTodosLosUsuarios()
  {
        return Grilla.TraerTodosLosUsuarios();

  }

  function BorrarLocal(id)
  {
        return ABM.BorrarLocal(id);

  }
 function ModificarLocal(local)
  {
        return ABM.ModificarLocal(local);

  }


})