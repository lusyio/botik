<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ProviderResource;
use App\Provider;
use Illuminate\Support\Facades\Validator;

class ProviderController extends Controller
{
    protected function providerCreateValidator(array $data)
    {
        $messages = [
            'name' => 'Поле :attribute обязательно для заполнения.',
            'nameCompany' => 'Поле :attribute обязательно для заполнения.',
            'phone.min' => 'Телефон должен состоять из 11 символов (7 XXX XXX XX XX)',
            'phone.max' => 'Телефон должен состоять из 11 символов (7 XXX XXX XX XX)',
            'beneficiaryName' => 'Поле :attribute обязательно для заполнения.',
            'beneficiaryAccount_name' => 'Поле :attribute обязательно для заполнения.',
            'beneficiaryBank_address' => 'Поле :attribute обязательно для заполнения.',
            'beneficiaryAddress' => 'Поле :attribute обязательно для заполнения.',
            'beneficiaryBankName' => 'Поле :attribute обязательно для заполнения.',
            'beneficiaryBankCode' => 'Поле :attribute обязательно для заполнения.',
            'max' => 'Поле :attribute должно содержать не более :max символов',
        ];

        $names = [
            'name' => 'имя поставщика',
            'nameCompany' => 'название компании',
            'phone' => 'телефон',
            'beneficiaryName' => 'имя получателя',
            'beneficiaryAccountName' => 'название счета получателя',
            'beneficiaryBankAddress' => 'адрес банка получателя',
            'beneficiaryAddress' => 'адрес получателя',
            'beneficiaryBankName' => 'название банка получателя',
            'beneficiaryBankCode' => 'код банка получателя',
        ];

        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'phone' => ['min:11', 'max:11'],
            'nameCompany' => ['required', 'string', 'max:255'],
            'beneficiaryName' => ['required', 'string', 'max:255'],
            'beneficiaryAccountName' => ['required', 'string', 'max:255'],
            'beneficiaryBankAddress' => ['required', 'string', 'max:255'],
            'beneficiaryAddress' => ['required', 'string', 'max:255'],
            'beneficiaryBankName' => ['required', 'string', 'max:255'],
            'beneficiaryBankCode' => ['required', 'string', 'max:255'],
        ], $messages, $names);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(ProviderResource::collection(Provider::all(), 200));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Provider $provider
     * @return void
     */
    public function store(Request $request, Provider $provider)
    {
        $this->providerCreateValidator($request->all());
        $newProvider = $provider->create($provider->dashesToCamelCase($request->all()));
        return response()->json(new ProviderResource($newProvider), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param Provider $provider
     * @return \Illuminate\Http\Response
     */
    public function show(Provider $provider)
    {
        return response()->json(new ProviderResource($provider), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param Provider $provider
     * @return void
     */
    public function update(Request $request, Provider $provider)
    {
        $this->providerCreateValidator($request->all());
        $provider->update($provider->dashesToCamelCase($request->all()));
        return response()->json(new ProviderResource($provider), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Provider $provider
     * @return \Illuminate\Http\Response
     */
    public function destroy(Provider $provider)
    {
        $provider->delete();
        return response()->json([], 204); //что вернуть?
    }
}
