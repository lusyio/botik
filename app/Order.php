<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function provider()
    {
        return $this->belongsTo('App\Provider', 'providerId');
    }

    public function tags()
    {
       return $this->belongsToMany('App\Tag', 'order_tag', 'order_id', 'tag_id');
    }
}
