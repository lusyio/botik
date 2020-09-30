<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function catalog()
    {
        return $this->belongsTo('App\Catalog');
    }

    public function orders()
    {
       return $this->belongsToMany('App\Order', 'order_product', 'product_id', 'order_id');
    }
}
