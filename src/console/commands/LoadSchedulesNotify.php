<?php
/**
 * Created by PhpStorm.
 * User: luang
 * Date: 20/04/2019
 * Time: 17:42
 */

namespace Oka6\Admin\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Config;
use Oka6\Admin\Library\MongoUtils;
use Oka6\Admin\Oka6Notification;
use Illuminate\Support\Facades\Log;

class LoadSchedulesNotify extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'Admin:LoadSchedulesNotify';
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Load Schedules to send notify';
    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct() {
        parent::__construct();
    }
    /**
     * Execute the console command.
     *
     * @return mixed
     */

    public function handle(){
        /**  Load new scheduling*/
        $whoisIt            = uniqid();
        $notificationEmail  = Oka6Notification::loadEmailSchedulingToNotify($whoisIt, 1000);

        if($notificationEmail){
            foreach ($notificationEmail as $notification){
                $email = new \SendGrid\Mail\Mail();
                $email->setFrom("no-reply@hclinic.com.br", "Hclinic");
                $email->setSubject($notification->subject);
                $email->addTo($notification->to, $notification->name);
                $email->addContent("text/html", $notification->body);
                $sendgrid = new \SendGrid(Config::get('admin.sendgrid_api_key'));
                try {
                    $response       = $sendgrid->send($email);
                    $statusCode     = $response->statusCode();
                    $statusHeader   = $response->headers();
                    $statusBody     = $response->body();
                    Log::info('LoadSchedulesNotify handle success', ['statusCode' => $statusCode, 'statusHeader' => $statusHeader, 'statusBody' => $statusBody,]);
                    $notification->status       = 'sent';
                    $notification->date_sent_at = MongoUtils::convertDatePhpToMongo(date('Y-m-d H:i:s'));
                    $notification->save();
                } catch (Exception $e) {
                    Log::error('LoadSchedulesNotify handle ERROR', [$e->getMessage()]);
                    $notification->status       = 'error';
                    $notification->date_sent_at = MongoUtils::convertDatePhpToMongo(date('Y-m-d H:i:s'));
                    $notification->save();
                }
            }
        }





    }
}
