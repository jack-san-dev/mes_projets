<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>My Framework</title>
	<script type="text/javascript" src="static/js/jQuery.js"></script>
</head>
<body>
	<h1>Le Framework du futur</h1>
	<a href="#" id="part">AJAX ?</a>
	<section id="rend">
		<?php
		echo self::$_render;
		?>
	</section>
	<script type="text/javascript" src="static/js/script.js"></script>
</body>
<footer>
	<form action="$_SERVER['REQUEST_URI']" method="post">
		<input type="text" name="login" placeholder="login">
		<input type="password" name="pwd" placeholder="mot de passe">
		<input type="submit" name="sub">
	</form>

	<pre>
		<?php
		print_r($_POST);
		print_r($_GET);
		print_r($_SERVER);
		?>
	</pre>
	<h2>Ending</h2>
</footer>
</html>