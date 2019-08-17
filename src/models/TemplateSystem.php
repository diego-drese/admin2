<?php

namespace Negotiate\Admin;

use Illuminate\Http\Request;
use Jenssegers\Mongodb\Eloquent\Model;

class TemplateSystem extends Model
{

    protected $fillable = ['title', 'html'];
    protected $connection = 'negotiate_admin';
    protected $table = 'template_system';
    const TABLE = 'template_system';


//    public static function createTutorial(Request $request){
//        $tutorial = new TutorialHelp;
//        $tutorial['id'] = Sequence::getSequence(TutorialHelp::TABLE);
//        $tutorial['title'] = $request->get('title');
//        $tutorial['description'] = (binary)$request->get('description');
//        $tutorial->save();
//    }
//
    public static function updateTemplate(Request $request, $id)
    {
        if ($id) {
            $tpl = self::where(['id' => (int)$id])->first();
        }else{
            $tpl = new TemplateSystem;
            $tpl['id'] = Sequence::getSequence(TemplateSystem::TABLE);

        }
        self::parseVariableRequest($request, $tpl);
        $tpl->save();
        return $tpl;
    }

    private  static function parseVariableRequest(Request $request, $tpl)
    {
        $tpl['title'] = $request->get('title');
        $tpl['slug'] = $request->get('slug');
        $tpl['html'] = $request->get('html');
        $tpl['style'] = $request->get('style');
        $tpl['js'] = $request->get('js');
        return $tpl;
    }

    public static function changeStatusTpl(Request $request, $id)
    {
        $disable = self::where(['active' => (int)1])->first();
        if ($disable) {
            $disable['active'] = 0;
            $disable->save();
        }

        $tpl = self::where(['id' => (int)$id])->first();
        $tpl['active'] = (int)$request->get('status');;
        $tpl->save();
    }

    public static function deleteTpl($id){
        $tpl = self::where(['id'=>(int)$id])->first();
        $tpl->delete();
    }

}
