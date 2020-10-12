<?php

namespace App\Http\Controllers;

use App\Order;
use App\OrderItem;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\OrderWithRelationshipsResource;

class OrderController extends Controller
{
    protected function orderCreateValidator(array $data)
    {
        $messages = [
            'required' => 'Поле :attribute обязательно для заполнения.',
            'max' => 'Поле :attribute должно содержать не более :max символов',
        ];

        $names = [
            'name' => 'название',
            'providerId' => 'поставщик',
        ];

        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'providerId' => ['required', 'integer', 'max:255'],
        ], $messages, $names);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(OrderWithRelationshipsResource::collection(Order::all(), 200));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Order $order)
    {
        $newOrder = $order->create($order->dashesToSnakeCase($request->all()));
        if ($request->input('items') && array($request->input('items'))) {
            $items = $request->input('items');
            foreach ($items as $item) {
                $orderItem = new OrderItem();
                $product = Product::findOrFail($item['id']);
                $orderItem->order_id = $newOrder->id;
                $orderItem->product_id = $product->id;
                $orderItem->quantity = $item['quantity'];
                $orderItem->price = $product->price_cny;
                $orderItem->save();
            }
        }
        return response()->json(new OrderWithRelationshipsResource($newOrder), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        //
    }
}
