<?php

namespace App;

use App\Http\Resources\ProductResource;
use Illuminate\Database\Eloquent\Model;

class AutolongRuProduct extends Model
{
    protected $table = 'autolong_ru';

    public function checkVendorCodesInDB($vendorCodes)
    {
        $avilableProducts = [];
        foreach ($vendorCodes as $vendorCode) {
            $product = $this->whereArticul($vendorCode)->first();
            $usProducts = Product::whereVendorCode($vendorCode);
            if (!is_null($product) && $product != '') {
                array_push($avilableProducts, $product);
            } elseif($usProducts->exists()) {
                array_push($avilableProducts, new ProductResource($usProducts->first()));
            }
        }
        return $avilableProducts;
    }
}
