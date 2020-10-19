<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ExchangeRate extends Model
{
    protected $fillable = ['rub', 'usd'];

    public function lastCourse()
    {
        return $this->latest()->first();
    }
}
