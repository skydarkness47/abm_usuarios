<?php
require_once('Clases/AccesoDatos.php');
require_once('Clases/usuario.php');
require 'vendor/autoload.php';



$configuration = [
    'settings' => [
        'displayErrorDetails' => true,
    ],
];
$c = new \Slim\Container($configuration);
$app = new \Slim\App($c);



$app->get('/', function ($request, $response, $args) {
    $response->write("Welcome to Slim!");
    return $response;
});




$app->get('/usuarios/validar/{objeto}', function ($request, $response, $args) {
 
 $usuario= json_decode($args['objeto']);
   $validador = false;   
   $arrUsuarios = Usuario::TraerTodosLosUsuarios();
   foreach ($arrUsuarios as $user) {
        if($user->Usuario == $usuario->usuario)
            if($user->Clave == $usuario->clave)
                 $validador=true;
   
   }
   echo  $validador;


});


$app->get('/usuarios', function ($request, $response, $args) {

 
   $arrAdmin = Usuario::TraerTodosLosUsuarios();


   
   return json_encode($arrAdmin);


});


$app->get('/usuarios/traer/{objeto}', function ($request, $response, $args) {

  $usuario=json_decode($args['objeto']);
  
$user = $usuario->usuario;
$usuarioBuscado=Usuario::TraerUnUsuario($user);

 
 return json_encode($usuarioBuscado);
   
 
});

$app->delete('/usuarios/borrar/{objeto}', function ($request, $response, $args) {
        
        $usuario=json_decode($args['objeto']);  
        


          return Usuario::BorrarUsuario($usuario); 
    
});

$app->post('/usuarios/modificar/{objeto}', function ($request, $response, $args) {
        
        $usuario=json_decode($args['objeto']);  
        
         var_dump($usuario);

          return Usuario::ModificarUsuario($usuario); 
    
});



/* POST: Para crear recursos */
$app->put('/usuarios/alta/{objeto}', function ($request, $response, $args) {

$usuario=json_decode($args['objeto']);
   
          return $response->write(Usuario::InsertarUsuario($usuario)); 
    
});


$app->post('/local/modificar/{objeto}', function ($request, $response, $args) {
        
        $local=json_decode($args['objeto']);  

          return Local::ModificarLocal($local); 
    
});







$app->run();
