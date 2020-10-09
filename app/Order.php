<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function provider()
    {
        return $this->belongsTo('App\Provider');
    }

    public function orderItems()
    {
       return $this->hasMany('App\OrderItem');
    }
}
