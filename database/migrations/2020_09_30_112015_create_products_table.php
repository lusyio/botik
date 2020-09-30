<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('nameRu');
            $table->string('nameEn')->nullable();
            $table->text('aboutRu');
            $table->text('aboutEn')->nullable();
            $table->bigInteger('catalogId')->nullable();
            $table->string('image');
            $table->integer('priceRub');
            $table->integer('priceUsd');
            $table->integer('priceCny');
            $table->integer('weightNetto');
            $table->integer('weightBrutto');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
