<?php 
namespace MyFramework;

class ORM extends Core
{
	public function add($table, $arg) {
		$column = [];
		$values = [];
		$col = "";
		$val = "";
		foreach($arg as $key => $value) {
			array_push($column, $key);
			array_push($values, "'" . $value . "'");
		}
		foreach($column as $value) {
			$col .= $value  . ",";
		} 
		foreach ($values as $value) {
			$val .= $value . ",";
		}
		$column = substr($col, 0, -1);
		$values = substr($val, 0, -1);
		$sql = "INSERT INTO $table($column) VALUES($values)";
		$query = self::$_pdo->prepare($sql);
		$query->execute();
	}
	public function update($table, $arg) {
		$column = [];
		$values = [];
		$set = "";
		$cond = "";
		$sqw = "";
		foreach($arg as $key => $value) {
			if($key == "id_membre") {
				$cond = "$key = $value";
				$sqw = "WHERE";
			}
			else {
				$set .= "$key = '$value', ";
			}
		}
		$set = substr($set, 0, -2);
		$sql = "UPDATE $table SET $set $sqw $cond";
		$query = self::$_pdo->prepare($sql);
		$query->execute();
	}
	public function remove($table, $arg) {
		$cond = "";
		foreach($arg as $key => $value) {
			if(is_string($value)) {
				$cond .= $key . " = '" . $value . "' || ";
			}
			else {
				$cond .= $key . " = " . $value . " || ";
			}
		}
		$cond = substr($cond, 0, -4);
		$sql = "DELETE FROM $table WHERE $cond";
		$query = self::$_pdo->prepare($sql);
		$query->execute();
	}
	public function find($table, $arg = ["*"], $cond = ['WHERE' => [1]], $and = "||") {
		$where = "";
		$order = "";
		$limit = "";
		$column = "";
		$sqw = "";
		if(isset($cond["WHERE"])) {
			foreach($cond["WHERE"] as $value) {
				$where .=  "$value $and ";
			}
			$sqw = "WHERE";
		}
		if(isset($cond['ORDER BY'])) {
			foreach($cond["ORDER BY"] as $value) {
				$order = " ORDER BY $value";
			}
		}
		if(isset($cond["LIMIT"])) {
			foreach($cond["LIMIT"] as $value) {
				$limit = " LIMIT $value";
			}
		}
		foreach($arg as $value) {
			$column .= "$value, ";
		}
		$column = substr($column, 0, -2);
		$where = substr($where, 0, -4);
		$sql = "SELECT $column FROM $table $sqw $where $order $limit";
		$query = self::$_pdo->prepare($sql);
		$query->execute();
		return $query->fetchAll();
	}
}