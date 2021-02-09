<?php
namespace MyFramework;
class Core
{
	static protected $_routing = [];
	static private $_render;
	protected $table;
	protected static $_pdo = null;
	public function __construct() 
	{
		$user = 'my_framework';
		$password = "";
		$database = 'my_framework';
		$host = 'localhost';
		if(self::$_pdo === null) {
			self::$_pdo = new \PDO('mysql:host=' . $host . ";dbname=" . $database, $user, $password);
			self::$_pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
		}
	}
	private function routing()
	{
		$controller = "default";
		$action = "default";
		$static = false;
		$tab = explode("/", $_SERVER['REQUEST_URI']);
		$sql = "SELECT * FROM routing WHERE url = :url";
		$query = self::$_pdo->prepare($sql);
		$query->bindValue(":url", $tab[2]);
		$query->execute();
		$table = $query->fetchAll();
		if(isset($table[0]['real_path'])) {
			$tob = explode("/", $table[0]['real_path']);
			$controller = $tob[0];
			$action = $tob[1];
			$static = true;
		}
		$meth = __NAMESPACE__ . '\\' . ucfirst($tab[2]) . "Controller";
		if(count($tab) != 3 && $static != true) {
			if(file_exists("controllers/" . ucfirst($tab[2]) . "Controller.class.php")) {
				$controller = $tab[2];
			}
			if (method_exists($meth, $tab[3] . "Action")) {
				$action = $tab[3];
			}
		}
		self::$_routing = [
		'controller' => $controller,
		'action' => $action,
		];
	}
	protected function render($params = [], $layout = "default")
	{
		$f = implode(DIRECTORY_SEPARATOR, [dirname(__DIR__), 'views',
			self::$_routing['controller'] , self::$_routing['action']]) . '.html';
		if (file_exists($f)) {
			$c = file_get_contents($f);
			foreach ($params as $k => $v) {
				$c = preg_replace("/\{\{\s*$k\s*\}\}/", $v, $c);
			}
			self::$_render = $c;
			require (dirname(__DIR__) . '/views/layouts/' . $layout . '.php');
		}
		else {
			self::$_render = "Impossible de trouver la vue" . PHP_EOL;
		}
	}
	protected function renderPartial($params = []) 
	{
		$f = implode(DIRECTORY_SEPARATOR, [dirname(__DIR__), 'views',
			self::$_routing['controller'] , self::$_routing['action']]) . '.html';
		if (file_exists($f)) {
			$c = file_get_contents($f);
			foreach ($params as $k => $v) {
				$c = preg_replace("/\{\{\s*$k\s*\}\}/", $v, $c);
			}
			echo self::$_render = $c;
		}
		else {
			echo self::$_render = "Impossible de trouver la vue" . PHP_EOL;
		}
	}
	public function run()
	{
		$this->routing();
		$c = __NAMESPACE__ . '\\' . ucfirst(self::$_routing['controller']) .
		'Controller';
		$o = new $c();
		if (method_exists($o, $a = self::$_routing['action'] . 'Action')) {
			$o->$a();
		}
		else {
			self::$_render = "Impossible de trouver la methode" . PHP_EOL;
		}
	}
}