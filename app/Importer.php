<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Importer extends Model
{
    use TranslateToSnakeCase;

    protected $fillable = [
      'name_ru',
      'name_en',
      'address',
      'phone'
    ];
};
