<?php
namespace App;

use Illuminate\Support\Str;

trait TranslateToCamelCase
{
    public function dashesToCamelCase($request)
    {
        $newRequest = [];
        foreach ($request as $key => $value) {
            $newRequest[Str::snake($key)] = $value;
        }
        return $newRequest;
    }
}
