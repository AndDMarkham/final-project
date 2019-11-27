<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RestaurantRequest;
use App\Restaurant;

class RestaurantsController extends Controller
{
    public function show($id)
    {
        $restaurant = Restaurant::where('id', $id)
            ->with('dishes.reviews.image')
            ->first();

       return $restaurant;
    }

    public function store(RestaurantRequest $request)
    {
        $newRestaurant = Restaurant::create([
            'name' => $request->input('name'),
            'address' => $request->input('address'),
            'latitude' => '50.00',
            'longitude' => '14.00',
            'phone' => $request->input('phone'),
            'website_url' => $request->input('website_url')
        ]);
        return $newRestaurant;
    }
}
