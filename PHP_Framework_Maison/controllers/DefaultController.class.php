<?php

namespace MyFramework;

class DefaultController extends DefaultModel
{
	public function defaultAction()
	{
		$this->render(['prenom' => $this->getLogin()]);
	}
	public function connexionAction()
	{
		if(!isset($_POST['log'])) {
			$_POST['log'] = "Visiteur";
		}
		$this->render(['url' => $_SERVER['REQUEST_URI'], 'login' => $_POST['log']]);
	}
	public function ajaxConnexionAction() {
		if(!isset($_POST['log'])) {
			$_POST['log'] = "Visiteur";
		}
		$this->renderPartial(['url' => $_SERVER['REQUEST_URI'], 'login' => $_POST['log']]);
	}
}