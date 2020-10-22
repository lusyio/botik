<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Operation extends Model
{
    use TranslateToSnakeCase;

    protected $fillable = [
      'name',
      'value',
      'type',
      'bank_id'
    ];
};
