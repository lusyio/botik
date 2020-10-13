<?php

namespace App;

class ContainerStatus
{
    const GOING = 'ContainerIsGoing';
    const TRANSIT = 'ContainerInTransit';
    const ARRIVED_AT_CUSTOMS = 'ContainerArrivedAtCustoms';
    const OUTPUT = 'ContainerOutput';
    const ARRIVED_AT_WAREHOUS = 'ContainerArrivedAtTheWarehouse';
}
