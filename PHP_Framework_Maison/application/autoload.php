<?php

spl_autoload_register(function ($class) {
	if(count($p = explode("\\", $class)) != 1) {
		$class = $p[1];
	}
	preg_match_all('#[A-Z][a-z]*#', $class, $tableau);
	if(array_search("Controller", $tableau[0]) != false) {
		if(file_exists("controllers/" . $class . ".class.php")) {
			include 'controllers/' . $class . '.class.php';
		}
	}
	else if(array_search("Model", $tableau[0]) != false) {
		if(file_exists("models/" . $class . ".class.php")) {
			include 'models/' . $class . '.class.php';
		}
	}
	else if(array_search("Entity", $tableau[0]) != false) {
		if(file_exists("models/entities/" . $class . ".class.php")) {
			include 'models/entities/' . $class . '.class.php';
		}
	}
	else if($tableau[0][0] == "Core" || $class == "ORM") {
		if(file_exists("application/" . $class . ".class.php")) {
			include 'application/' . $class . '.class.php';
		}
	}
});