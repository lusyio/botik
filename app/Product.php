<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function catalog()
    {
        return $this->belongsTo('App\Catalog','catalogId');
    }
}
