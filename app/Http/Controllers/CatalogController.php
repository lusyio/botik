<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\CatalogResource;
use Illuminate\Support\Facades\Validator;
use App\Catalog;

class CatalogController extends Controller
{
    protected function catalogCreateValidator(array $data)
    {
        $messages = [
            'required' => 'Поле :attribute обязательно для заполнения.',
            'max' => 'Поле :attribute должно содержать не более :max символов',
        ];

        $names = [
            'name' => 'название контейнера',
            'file' => 'файл'
        ];

        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'file' => ['required', 'mimes:pdf,xlsx']
        ], $messages, $names);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(CatalogResource::collection(Catalog::all(), 200));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Catalog $catalog
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Catalog $catalog)
    {
//       $this->catalogCreateValidator($request->all())->validate(); валидация
       $newCatalog = $catalog->create($catalog->dashesToSnakeCase($request->all()));
       $newCatalog->createOrUpdateFile($request->file('file'));
       return response()->json(new CatalogResource($newCatalog), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param Catalog $catalog
     * @return \Illuminate\Http\Response
     */
    public function show(Catalog $catalog)
    {
        return response()->json(new ContainerResource($catalog), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Catalog $catalog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Catalog $catalog)
    {
//       $this->catalogCreateValidator($request->all())->validate(); валидация
       $updatedProduct = $catalog->update($catalog->dashesToSnakeCase($request->all()));
       $updatedProduct->createOrUpdateFile($request->file('file'));
       return response()->json(new CatalogResource($catalog), 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Catalog $catalog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Catalog $catalog)
    {
        $catalog->deleteImage();
        $catalog->delete();
        return response()->json([], 204); //Что вернуть?
    }
}
