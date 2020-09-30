<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Importer;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Http\Resources\ImporterResource;

class ImporterController extends Controller
{
    protected function importerCreateValidator(array $data)
    {
        $messages = [
            'nameRu' => 'Поле :attribute обязательно для заполнения.',
            'nameEn' => 'Поле :attribute обязательно для заполнения.',
            'address' => 'Поле :attribute обязательно для заполнения.',
            'phone.min' => 'Телефон должен состоять из 11 символов (7 XXX XXX XX XX)',
            'phone.max' => 'Телефон должен состоять из 11 символов (7 XXX XXX XX XX)',
            'max' => 'Поле :attribute должно содержать не более :max символов',
        ];

        $names = [
            'nameRu' => 'Имя кириллецей',
            'nameEn' => 'Имя латиницей',
            'phone' => 'телефон',
            'address' => 'адрес',
        ];

        return Validator::make($data, [
            'nameRu' => ['required', 'string', 'max:255'],
            'nameEn' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'string', 'min:11', 'max:11'],
            'address' => ['required', 'string', 'max:255'],
        ], $messages, $names);
    }
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
    public function store(Request $request, Importer $importer)
    {
       $this->importerCreateValidator($request->all())->validate();
       $newImporter = $importer->create($importer->dashesToCamelCase($request->all()));
       return response()->json(new ImporterResource($newImporter), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param Importer $importer
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Importer $importer)
    {
        return response()->json(new ImporterResource($importer), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Importer $importer
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, Importer $importer)
    {
        $this->importerCreateValidator($request->all())->validate();
        $importer->update($importer->dashesToCamelCase($request->all()));
        return response()->json(new ImporterResource($importer), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Importer $importer
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(Importer $importer)
    {
        $importer->delete();
        return response()->json([], 204); //Что вернуть?
    }
}
