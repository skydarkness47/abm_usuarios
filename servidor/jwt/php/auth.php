<?php
include_once '../vendor/autoload.php';
use \Firebase\JWT\JWT;
$DatosPorPost = file_get_contents("php://input");

$usuario =json_decode($DatosPorPost);

	$ClaveDeEncriptacion="usuario";
	//$key = "1234";
$token["id"]=$usuario->id;
$token["usuario"]=$usuario->usuario;
	$token["clave"]=$usuario->clave;

 
	$token["iat"]=time();//momento de creacion
	$token["exp"]=time() + 20000000;
	$jwt = JWT::encode($token, $ClaveDeEncriptacion);


$ArrayConToken["usuario"]=$jwt;
echo json_encode($ArrayConToken);

?>