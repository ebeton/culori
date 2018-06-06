<?php
/**
 * Created by PhpStorm.
 * User: florin
 * Date: 6/4/18
 * Time: 2:17 PM
 */
namespace Culori;

class Random {

	public $number = 0;
	public $colors_arr = null;
	protected $array = array();
	protected $array_colorsBalls = array();
	protected $array_groups  = array();

	protected $arr_all = array();

	public function __construct($number = 0, $colors = array()) {
        if( intval($number) === 0 ) {
            return array();
        }
        $this->number = intval($number);
        $this->colors_arr = $colors;

		$this->arr_all['groups'] = array();
		$this->arr_all['colors_arr'] = array();
		$this->arr_all['totalBall_colorArr'] = array();
	}

	public function randomize() {
		for($i = 0; $i < (int) $this->number; $i++) {
			$keys = $this->getRandom();

			$this->array[$i] = $this->colors_arr->{$keys};
			$this->array_colorsBalls[$this->colors_arr->{$keys}] = 1;
			$this->array_groups['Group_'.($i+1)] = array();
		}

		$this->arr_all['colors_arr'] = $this->array;
		$this->asingBall_2Colors(($this->number * $this->number));

		return $this->arr_all;
	}

	protected function getRandom() {
		$key = array_rand((array)$this->colors_arr, 1);
		if(in_array($key, $this->array)) {
			$this->getRandom();
		}
		return $key;
	}

	protected function asingBall_2Colors($n) {
		$first_key = '';
		for ( $i = 0; $i < ($n - $this->number); $i++) {
			$key = array_rand($this->array, 1);
			if ($i === 0) { $first_key = $key; }
			$this->array_colorsBalls[$this->array[$key]] = $this->array_colorsBalls[$this->array[$key]] + 1;
		}
		if(array_sum($this->array_colorsBalls) < $n) { $this->array_colorsBalls[$first_key] = $this->array_colorsBalls[$first_key] + 1; }

		$this->msj = $this->asociateColors_ToGrops();
	}

	protected function createGroup() {
	    $arr = array();
	    $diff = 0;
		$max_arr = array_keys($this->array_colorsBalls, max($this->array_colorsBalls));
		$min_arr = array_keys($this->array_colorsBalls, min($this->array_colorsBalls));

		if( $this->array_colorsBalls[$min_arr[0]] === $this->number ) {

		    $arr[$min_arr[0]] = $this->array_colorsBalls[$min_arr[0]];
		    unset($this->array_colorsBalls[$min_arr[0]]);
		    return $arr;
        } elseif ( $this->array_colorsBalls[$min_arr[0]] < $this->number && $min_arr[0] !== $max_arr[0]) {

		    $arr[$min_arr[0]] = $this->array_colorsBalls[$min_arr[0]];
            $diff = $this->number - $arr[$min_arr[0]];
            $arr[$max_arr[0]] = $diff;
			$this->array_colorsBalls[$max_arr[0]] = $this->array_colorsBalls[$max_arr[0]] - $diff;

			if( $this->array_colorsBalls[$max_arr[0]] === 0 ) unset($this->array_colorsBalls[$max_arr[0]]);
            unset($this->array_colorsBalls[$min_arr[0]]);
            return $arr;

        } else {

		    if ( $min_arr[0] !== $max_arr[0] && $this->array_colorsBalls[$min_arr[0]] > $this->number ) {

			    $diff = $this->array_colorsBalls[$min_arr[0]] - $this->number;

			    $arr[$min_arr[0]] = $diff;
			    $this->array_colorsBalls[$min_arr[0]] = $this->array_colorsBalls[$min_arr[0]] - $diff;

			    $diff = null;

			    $diff = $this->number - $arr[$min_arr[0]];
			    $arr[$max_arr[0]] = $diff;
			    $this->array_colorsBalls[$max_arr[0]] = $this->array_colorsBalls[$max_arr[0]] - $diff;
			    if( $this->array_colorsBalls[$min_arr[0]] === 0 ) unset($this->array_colorsBalls[$min_arr[0]]);
			    if( $this->array_colorsBalls[$max_arr[0]] === 0 ) unset($this->array_colorsBalls[$max_arr[0]]);
			    return $arr;
		    } elseif( $min_arr[0] === $max_arr[0] ) {
			    $arr[$min_arr[0]] = $this->array_colorsBalls[$min_arr[0]];
			    return $arr;
		    }
        }
	}

	protected function asociateColors_ToGrops() {
		$this->arr_all['totalBall_colorArr'] = $this->array_colorsBalls;

		for ( $i = 1; $i <= (int) $this->number; $i++ ) {
			$this->arr_all['groups']['Group_'.$i] = $this->createGroup();
		}
		return "The End!";
	}
}