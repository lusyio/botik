<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\CatalogResource;

class TagWithCatalogsResource extends JsonResource
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
            'name' => $this->name,
            'catalogs' => CatalogResource::collection($this->catalogs),
            'createdAt' => $this->created_at,
            'updatedAt' => $this->updated_at,
        ];
    }
}