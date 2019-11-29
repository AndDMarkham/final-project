<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Dish;
use App\Review;

use Illuminate\Database\Eloquent\Builder;

class ReviewsController extends Controller
{
    public function show($id)
    {
        $user_id = $id;

        $dishes = Dish::whereHas('reviews', function (Builder $reviewQuery) use ($user_id) {
            $reviewQuery->where('user_id', $user_id);
        })->with(['reviews' => function ($reviewQ) use ($user_id) {
            $reviewQ->where('user_id', $user_id)->with('image');
        }])
            ->limit(20)
            ->get();

       return $dishes;
    }

    public function store(Request $request) 
    {
        $extension = $file->getClientOriginalExtension(); // getting image extension
        $filename = uniqid().'.'.$extension;
        $file->move('images/user_images', $filename);
        $image = Image::create([
            'path' => "images/user_images" . $filename
        ]);

        $review = Review::create([
            'dish_id' => $request->input('dish_id'),
            'user_id' => $request->input('user_id'),
            'review' => $request->input('review'),
            'rating' => $request->input('rating'),
            'image_id' => $request->input('image_id'),
        ]);

        return $review;
    }
}
