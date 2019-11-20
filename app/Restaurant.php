<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    public function image()
    {
        return $this->belongsTo('App\Image');
    }

    public function dishes()
    {
        return $this->hasMany('App\Dish');
    }

}
