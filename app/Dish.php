<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dish extends Model
{
    public function diets()
    {
        return $this->belongsToMany('App\Diet');
    }

    public function restaurant()
    {
        return $this->belongsTo('App\Restaurant');
    }

    public function reviews()
    {
        return $this->hasMany('App\Review');
    }
}
