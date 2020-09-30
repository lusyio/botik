<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('importers', 'ImporterController@index');
Route::post('importers', 'ImporterController@store');
Route::get('importers/{id}', 'ImporterController@show');
Route::put('importers/{id}', 'ImporterController@update');
Route::delete('importers/{id}', 'ImporterController@destroy');

