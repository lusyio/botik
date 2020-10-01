<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Container extends Model
{
    use TranslateToSnakeCase;

    protected $fillable = [
        'name',
        'status',
        'city'
    ];
}
