<?php
/**
 * Created by PhpStorm.
 * User: luang
 * Date: 20/04/2019
 * Time: 17:42
 */

namespace Oka6\Clinic\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Oka6\Admin\Library\MongoUtils;
use Oka6\Admin\Oka6Client;
use Oka6\Admin\Oka6Notification;
use Oka6\Clinic\ClinicPatient;
use Oka6\Clinic\ClinicProfessional;
use Oka6\Clinic\ClinicScheduleling;
use Oka6\Clinic\Service;
use Oka6\Clinic\Helpers\Helper;
use Oka6\Clinic\Services\GoogleCalendar as Calendar;
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

//                $email = new \SendGrid\Mail\Mail();
//                $email->setFrom("test@example.com", "Example User");
//                $email->setSubject("Sending with SendGrid is Fun");
//                $email->addTo("test@example.com", "Example User");
//                $email->addContent("text/plain", "and easy to do anywhere, even with PHP");
//                $email->addContent(
//                    "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
//                );
//                $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
//                try {
//                    $response = $sendgrid->send($email);
//                    print $response->statusCode() . "\n";
//                    print_r($response->headers());
//                    print $response->body() . "\n";
//                } catch (Exception $e) {
//                    echo 'Caught exception: '. $e->getMessage() ."\n";
//                }
            }
        }


    }
}
