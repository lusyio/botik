<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\ProviderResource;
use App\Http\Resources\OrderItemResource;

class OrderWithRelationshipsResource extends JsonResource
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
            'providerId' => new ProviderResource($this->provider),
            'orderItems' => OrderItemResource::collection($this->orderItems),
            'cargo' => $this->cargo,
            'createdAt' => strtotime($this->created_at),
            'updatedAt' => strtotime($this->updated_at),
        ];
    }
}
