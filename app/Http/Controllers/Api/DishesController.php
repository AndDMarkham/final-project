<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Dish;

class DishesController extends Controller
{
    public function show($id)
    {
        $dish = Dish::where('id', $id)
            ->with('reviews')
            ->with('reviews.image')
            ->get();

       return $dish;
    }
}
