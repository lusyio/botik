<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Catalog extends Model
{
    public function provider()
    {
        return $this->belongsTo('App\Provider');
    }

    public function tags()
    {
       return $this->belongsToMany('App\Tag', 'catalog_tag', 'catalog_id', 'tag_id');
    }
}
