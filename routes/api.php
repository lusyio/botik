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
Route::get('operations', 'OperationController@index');
Route::post('operations', 'OperationController@store');
Route::get('operations/{operation}', 'OperationController@show');
Route::put('operations/{operation}', 'OperationController@update');
Route::delete('operations/{operation}', 'OperationController@destroy');

Route::get('containers', 'ContainerController@index');
Route::post('containers', 'ContainerController@store');
Route::get('containers/{container}', 'ContainerController@show');
Route::put('containers/{container}', 'ContainerController@update');
Route::delete('containers/{container}', 'ContainerController@destroy');

Route::get('providers', 'ProviderController@index');
Route::post('providers', 'ProviderController@store');
Route::get('providers/{provider}', 'ProviderController@show');
Route::put('providers/{provider}', 'ProviderController@update');
Route::delete('providers/{provider}', 'ProviderController@destroy');

Route::get('products', 'ProductController@index');
Route::post('products', 'ProductController@store');
Route::get('products/{product}', 'ProductController@show');
Route::put('products/{product}', 'ProductController@update');
Route::delete('products/{product}', 'ProductController@destroy');
Route::post('products/calculateprice', 'ProductController@getPrice');

Route::get('catalogs', 'CatalogController@index');
Route::post('catalogs', 'CatalogController@store');
Route::get('catalogs/{catalog}', 'CatalogController@show');
Route::put('catalogs/{catalog}', 'CatalogController@update');
Route::delete('catalogs/{catalog}', 'CatalogController@destroy');

Route::get('countries', 'CountryController@index');
Route::post('countries', 'CountryController@store');
Route::get('countries/{country}', 'CountryController@show');
Route::put('countries/{country}', 'CountryController@update');
Route::delete('countries/{country}', 'CountryController@destroy');

Route::get('orders', 'OrderController@index');
Route::post('orders', 'OrderController@store');
Route::get('orders/{order}', 'OrderController@show');
Route::put('orders/{order}', 'OrderController@update');
Route::delete('orders/{order}', 'OrderController@destroy');
Route::post('orders/checkvendorcode', 'OrderController@checkVendorCode');
