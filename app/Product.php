<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    use TranslateToSnakeCase;

    public const IMAGE_DIRECTORY = '/public/product-images';

    protected $fillable = [
        'name_ru',
        'name_en',
        'about_ru',
        'about_en',
        'catalog_id',
        'price_rub',
        'price_usd',
        'price_cny',
        'weight_netto',
        'weight_brutto',
    ];

    public function catalog()
    {
        return $this->belongsTo('App\Catalog');
    }

    public function orders()
    {
       return $this->belongsToMany('App\Order', 'order_product', 'product_id', 'order_id');
    }

    public function createOrUpdateImage($image)
    {
        if (!is_null($this->image)) {
            $this->deleteImage();
        }
        $path = Storage::putFileAs(Product::IMAGE_DIRECTORY, $image, $this->id . '_' . $this->id . $image->extension());
        $this->image = $path;
        $this->save();
    }

    public function deleteImage()
    {
        if (!is_null($this->image) && Storage::exists($this->image)) {
            Storage::delete($this->image);
        }
        $this->image = null;
        $this->save();
    }
}
