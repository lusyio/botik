<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use TranslateToSnakeCase;

    protected $fillable = ['name', 'provider_id'];

    public function provider()
    {
        return $this->belongsTo('App\Provider');
    }

    public function orderItems()
    {
       return $this->hasMany('App\OrderItem');
    }
}
