<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Importer;
use Illuminate\Http\Request;

class ImporterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(Importer::all(), 200);
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
           'name_ru' => 'required|max:255',
           'name_en' => 'required|max:255',
           'address' => 'required|max:255',
           'phone' => 'required',
       ]);
       $importer = Importer::create($request->all());
       return response()->json($importer, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $importer = Importer::find($id);
        return response()->json($importer, 200);
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
            'name_ru' => 'required|max:255',
            'name_en' => 'required|max:255',
            'address' => 'required|max:255',
            'phone' => 'required',
        ]);

        $importer = Importer::find($id);
        $importer->update($request->all());
        return response()->json($importer, 200);
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
        return response()->json(null, 204);
    }
}
