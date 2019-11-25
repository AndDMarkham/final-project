<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Restaurant;
use App\Dish;

class PrimaryController extends Controller
{
    public function index()
    {
        // $diets = $request->diets;

        $restaurants = Restaurant::with('dishes')->with('dishes.reviews')->with('dishes.reviews.image')->limit(5)->get();

        // $dishes = Dish::with('diets')->whereIn('restaurant_id', $restaurants->pluck('id'));

        return $restaurants;
    }
}
