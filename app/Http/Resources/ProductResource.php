<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\CatalogResource;
use App\Http\Resources\OrderResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'nameRu' => $this->name_ru,
            'nameEn' => $this->name_en,
            'aboutRu' => $this->about_ru,
            'aboutEn' => $this->about_en,
            'catalogId' => $this->catalog_id,
            'image' => $this->image,
            'priceRub' => $this->price_rub,
            'priceUsd' => $this->price_usd,
            'priceCny' => $this->price_cny,
            'weightNetto' => $this->weight_netto,
            'weightBrutto' => $this->weight_brutto,
            'catalog' => new CatalogResource($this->catalog),
            'orders' => OrderResource::collection($this->orders),
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}
