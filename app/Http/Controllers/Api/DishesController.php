<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\DishRequest;
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

    public function store(DishRequest $request)
    {
        $newDish = Dish::create([
            'name' => $request->input('name'),
            'description' => $request->input('description')
        ]);
        return $newDish;
    }
}
