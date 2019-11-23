<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//PrimaryApi:
Route::get('/restaurants', 'Api\PrimaryController@index');

//RestaurantApis:
Route::get('/restaurant/{id}', 'Api\RestaurantsController@show');
Route::post('/restaurant/new', 'Api\RestaurantsController@store');

//DishApis:
Route::get('/dish/{id}', 'Api\DishesController@show');
Route::post('/dish/new/{id}', 'Api\DishesController@store');
