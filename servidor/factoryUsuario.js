miApp.service('factoryUsuario', function (Login,ABM,factoryRutas,Grilla) {
objeto = {};
   objeto.nombre = "factory de login y abm";
  objeto.Insertar = Insertar;
objeto.TraerTodosLosUsuarios=TraerTodosLosUsuarios;
objeto.Borrar = Borrar;
objeto.Modificar =Modificar;

   return objeto;



  function Insertar(parametro)
  {
    return ABM.Insertar(parametro);

  }

  function TraerTodosLosUsuarios()
  {
      console.info(Grilla.TraerTodosLosUsuarios());
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