<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$_POST = json_decode(file_get_contents('php://input'), true);

$dbHost = "212.237.39.101";
$dbName = "ishtar";
$dbUser = "ish_tar";
$dbPass = "#N3f4AS!6";

try {
	$dbh = new PDO("mysql:host={$dbHost};dbname={$dbName}", $dbUser, $dbPass);
	//$dbh->query("INSERT INTO leads (name, surname, email, company, phone, privacy) VALUES ('{$_POST["name"]}', '{$_POST["surname"]}', '{$_POST["email"]}', '{$_POST["company"]}','{$_POST["phone"]}', '{$_POST["privacy"]}')");
	echo json_encode(array(
		"response" => "SUCCESS"
	));
} catch (PDOException $e) {
	echo json_encode(array(
		"response" => "ERROR"
	));
}

/*if(isset($_POST['email']) && $_POST['email'] !=''){
	if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)&& preg_match('/@.'+'\./', $_POST['email']) ){

		$nm = $_POST['name'];
		$cg = $_POST['surname'];
		$em = $_POST['email'];
		$az = $_POST['company'];
		$tel = $_POST['phone'];

		$to = "commerciale@gruppodigitouch.it";
		$messageSubject = "Lead whitepaper e-commerce";
		$body = "";

		$body .= "Download di: ".$nm. " + ".$cg." \r\n";
		$body .= "Email: ".$em. "\r\n";
		$body .= "Azienda: ".$az. "\r\n";
		$body .= "Tel: ".$tel. "\r\n";

		mail($to,$messageSubject, $body);
	}
}*/
?>