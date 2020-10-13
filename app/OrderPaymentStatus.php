<?php

namespace App;

class OrderPaymentStatus
{
    const PENDING = 'OrderPending';
    const PAID_ON = 'OrderPaidOn';
    const WAITING_REFUND = 'OrderWaitingRefund';
    const REFUNDED = 'OrderRefunded';
}
