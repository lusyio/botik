<?php

namespace App;

class OrderStatus
{
    const CREATED = 'OrderCreated';
    const PRODUCTION = 'OrderInProduction';
    const SENT_CARRIER = 'OrderSentToTheCarrier';
    const TRANSIT = 'OrderInTransit';
    const ARRIVED_AT_CUSTOMS = 'OrderArrivedAtCustoms';
    const ARRIVED_AT_WAREHOUS = 'OrderarrivedAtTheWarehouse';
    const CANCELED = 'OrderCanceled';
    const REFUNDED = 'OrderRefunded';
    const COMPLETED = 'OrderCompleted';
}
