<?php

namespace Negotiate\Admin;

use Illuminate\Http\Request;
use Jenssegers\Mongodb\Eloquent\Model;

class TutorialHelp extends Model
{

    protected $fillable     = ['title', 'description'];
    protected $connection   = 'negotiate_admin';
    protected $table        = 'tutorial_help';
    const TABLE             = 'tutorial_help';


    public static function createTutorial(Request $request){
        $tutorial = new TutorialHelp;
        $tutorial['id'] = Sequence::getSequence(TutorialHelp::TABLE);
        $tutorial['title'] = $request->get('title');
        $tutorial['description'] = (binary)$request->get('description');
        $tutorial->save();
    }

    public static function updateTutorial(Request $request, $id){
        //$tutorial  = TutorialHelp::where('id',(int)$id)->first();
        $tutorial = TutorialHelp::where(['id'=>(int)$id])->first();
        $tutorial['title'] = $request->get('title');
        $tutorial['description'] = (binary)$request->get('description');
        $tutorial->save();
    }

    public static function deleteTutorial($id){
        $tutorial = TutorialHelp::where(['id'=>(int)$id])->first();
        $tutorial->delete();
    }

}
