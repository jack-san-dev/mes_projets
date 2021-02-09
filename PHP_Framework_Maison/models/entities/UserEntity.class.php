<?php

namespace MyFramework;

class UserEntity extends ORM
{
	private $login;
	private $email;
	private $pwd;
	private $id;
	public function __construct($arg) {
		$arg["pwd"] = hash("ripemd160", "DevInPeace" . $arg['pwd']);
		if(isset($arg['id'])) {
			if(empty(parent::find("user", ["*"], ["WHERE" => ["id = " . $arg['id']]]))) {
				parent::add("user", $arg);
			}
		}
		else if(isset($arg['login']) && isset($arg['pwd'])) {
			if (empty(parent::find("user", ["*"], ["WHERE" => ["login = '" . $arg['login'] . "'", "pwd = '" . $arg['pwd'] . "'"]], "&&"))) {
				parent::add("user", $arg);
			}
		}
		$tab = parent::find("user", ["*"], ["WHERE" => ["login = '" . $arg['login'] . "'", "pwd = '" . $arg['pwd'] . "'"]], "&&");
		$this->login = $tab[0]['login'];
		$this->email = $tab[0]['email'];
		$this->pwd = $tab[0]['pwd'];
		$this->id = $tab[0]['id_membre'];
	}
	public function getLogin() {
		return $this->login;
	}
	public function getEmail() {
		return $this->email;
	}
	public function setLogin($log) {
		$this->login = $log;
	}
	public function setEmail($mail) {
		$this->email = $mail;
	}
	public function setPwd($pwd) {
		$this->pwd = hash("ripemd160", "DevInPeace" . $pwd);
	}
	public function getId() {
		return $this->id;
	}
	public function save() {
		parent::update("user", ["id_membre" => $this->id, "login" => $this->login, "email" => $this->email, "pwd" => $this->pwd]);
	}
}