<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    public function restaurants()
    {
        return $this->hasMany('App\Restaurant');
    }

    public function users()
    {
        return $this->hasMany('App\User');
    }

    public function reviews()
    {
        return $this->hasMany('App\Review');
    }
}
