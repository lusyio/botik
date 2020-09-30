<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Importer;
use Illuminate\Http\Request;
use App\Http\Resources\ImporterResource;

class ImporterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(ImporterResource::collection(Importer::all()), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $request->validate([
           'name_ru' => 'required|max:255|min:1',
           'name_en' => 'required|max:255|min:1',
           'address' => 'required|max:255|min:1',
           'phone' => 'required',
       ]);
       $importer = Importer::create($request->all());
       return response()->json(new ImporterResource($importer), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        return response()->json(new ImporterResource(Importer::find($id)), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name_ru' => 'required|max:255|min:1',
            'name_en' => 'required|max:255|min:1',
            'address' => 'required|max:255|min:1',
            'phone' => 'required',
        ]);

        $importer = Importer::find($id)->update($request->all());
        return response()->json(new ImporterResource($importer), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id)
    {
        Importer::find($id)->delete();
        return response()->json([], 204); //Что вернуть?
    }
}
