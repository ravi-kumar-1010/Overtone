<?php
if(isset($_POST['loginButton'])) {
	$username = $_POST['loginUsername'];
	$password = $_POST['loginPassword'];
	

	$resultlogin = $account->login($username, $password);
	if($resultlogin == true){
		$_SESSION['userLoggedIn'] = $username;
		header('Location: index.php');
	}
}
?>