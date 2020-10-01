<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Container extends Model
{
    use TranslateToCamelCase;

    protected $fillable = [
        'name',
        'status',
        'city'
    ];
}
