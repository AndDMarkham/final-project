<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Restaurant;

class PrimaryController extends Controller
{
    public function index()
    {
        $restaurant = Restaurant::with('dishes')
            ->with('dishes.reviews')
            ->with('dishes.reviews.image')
            ->limit(5)
            ->get();

        return $restaurant;
    }
}
