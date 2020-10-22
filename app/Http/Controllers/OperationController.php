<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Operation;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Http\Resources\OperationResource;

class OperationController extends Controller
{
    protected function operationCreateValidator(array $data)
    {
        $messages = [
            'required' => 'Поле :attribute обязательно для заполнения.',
            'max' => 'Поле :attribute должно содержать не более :max символов',
        ];

        $names = [
            'name' => 'Имя кириллецей',
            'value' => 'сумма',
            'type' => 'тип',
            'bank_id' => 'счет',
        ];

        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'value' => ['required', 'string', 'max:255'],
            'type' => ['required', 'string'],
            'bank_id' => ['required', 'string', 'max:255'],
        ], $messages, $names);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(OperationResource::collection(Operation::all()), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, Operation $operation)
    {
       $this->operationCreateValidator($request->all())->validate();
       $newOperation = $operation->create($operation->dashesToSnakeCase($request->all()));
       return response()->json(new OperationResource($newOperation), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param Operation $operation
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Operation $operation)
    {
        return response()->json(new OperationResource($operation), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Operation $operation
     * @return \Illuminate\Http\JsonResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, Operation $operation)
    {
        $this->operationCreateValidator($request->all())->validate();
        $operation->update($operation->dashesToSnakeCase($request->all()));
        return response()->json(new OperationResource($operation), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Operation $operation
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(Operation $operation)
    {
        $operation->delete();
        return response()->json([], 204);
    }
}
