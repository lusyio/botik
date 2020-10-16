<?php

namespace App\Console;

use App\ExchangeRate;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Http;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
         $schedule->call(function() {
             $response = Http::get('https://www.cbr-xml-daily.ru/daily_json.js');
             $rubToCny = json_decode($response->body())->Valute->CNY->Previous;
             $rubToUsd = json_decode($response->body())->Valute->USD->Previous;
             $exchangeRate = new ExchangeRate();
             $exchangeRate->cny_to_rub = $rubToCny;
             $exchangeRate->cny_to_usd = round($rubToCny / $rubToUsd, 4);
             $exchangeRate->save();
         })->dailyAt('17:25');
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
