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
}
