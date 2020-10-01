<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;
use App\Product;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    protected function productCreateValidator(array $data)
    {
        $messages = [
            'nameRu' => 'Поле :attribute обязательно для заполнения.',
            'aboutRu' => 'Поле :attribute обязательно для заполнения.',
            'image' => 'Поле :attribute обязательно для заполнения.',
            'priceRub' => 'Поле :attribute обязательно для заполнения.',
            'priceUsd' => 'Поле :attribute обязательно для заполнения.',
            'priceCny' => 'Поле :attribute обязательно для заполнения.',
            'weightNetto' => 'Поле :attribute обязательно для заполнения.',
            'weightBrutto' => 'Поле :attribute обязательно для заполнения.',
            'max' => 'Поле :attribute должно содержать не более :max символов',
        ];

        $names = [
            'nameRu' => 'название продукта',
            'aboutRu' => 'о продукте',
            'image' => 'изображение',
            'priceRub' => 'цена в рублях',
            'priceUsd' => 'цена в долларах',
            'priceCny' => 'цена в юань',
            'weightNetto' => 'вес в нетто',
            'weightBrutto' => 'вес в брутто',
        ];

        return Validator::make($data, [
            'nameRu' => ['required', 'string', 'max:255'],
            'aboutRu' => ['required'],
            'image' => ['required', 'image'],
            'priceRub' => ['required', 'integer', 'max:999999'],
            'priceUsd' => ['required', 'integer', 'max:999999'],
            'priceCny' => ['required', 'integer', 'max:999999'],
            'weightNetto' => ['required', 'integer', 'max:999999'],
            'weightBrutto' => ['required', 'integer', 'max:999999'],
        ], $messages, $names);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(ProductResource::collection(Product::all(), 200));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Product $product
     * @return void
     */
    public function store(Request $request, Product $product)
    {
        $this->productCreateValidator($request->all());
        $newProduct = $product->create($product->dashesToSnakeCase($request->all()));
        $newProduct->createOrUpdateImage($request->file('image'));
        return response()->json(new ProductResource($newProduct), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        return response()->json(new ProductResource($product), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        $this->productCreateValidator($request->all());
        $updatedProduct = $product->update($product->dashesToSnakeCase($request->all()));
        $updatedProduct->createOrUpdateImage($request->file('image'));
        return response()->json(new ProductResource($product), 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->deleteImage();
        $product->delete();
        return response()->json([], 204); //Что вернуть?
    }
}
