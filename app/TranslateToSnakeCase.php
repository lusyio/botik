<?php
namespace App;

use Illuminate\Support\Str;

trait TranslateToSnakeCase
{
    public function dashesToSnakeCase($request)
    {
        $newRequest = [];
        foreach ($request as $key => $value) {
            $newRequest[Str::snake($key)] = $value;
        }
        return $newRequest;
    }
}
