<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Catalog extends Model
{
    public function provider()
    {
        return $this->belongsTo('App\Provider');
    }
}
