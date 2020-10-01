<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use TranslateToCamelCase;

    public function providers()
    {
        return $this->hasMany('App\Provider');
    }
}
