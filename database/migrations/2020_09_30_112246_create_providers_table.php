<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProvidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('providers', function (Blueprint $table) {
            $table->id();
            $table->string('nameProviders');
            $table->string('nameCompany');
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->string('phone')->nullable();
            $table->string('wechat')->nullable();
            $table->string('country')->nullable();
            $table->string('beneficiaryName');
            $table->string('beneficiaryAccountName');
            $table->string('beneficiaryBankAddress');
            $table->string('beneficiaryAddress');
            $table->string('beneficiaryBankName');
            $table->string('beneficiaryBankCode');
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
        Schema::dropIfExists('providers');
    }
}
