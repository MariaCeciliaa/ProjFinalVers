<?php 
$conexao = new PDO("mysql:host=localhost;dbname=lista", "root", "0000");

$obj = $conexao->prepare("select * from usuarios where login=? and senha=?");
$login = $_GET ["login"];
$senha = $_GET ["senha"];
$obj ->execute ([$login, $senha]);

$dados = $obj -> fetchAll(PDO::FETCH_ASSOC);
$resultado = json_encode($dados);

header("Content-type: application/json");
header("Access-Control-Allow-Origin: *");
echo($resultado);
?>

