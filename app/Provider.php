<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    public function catalogs()
    {
        return $this->hasMany('App\Catalog', 'providerId');
    }

    public function orders()
    {
        return $this->hasMany('App\Order', 'providerId');
    }
}
