<?php

namespace Aggrega\Ironforge\Http\Controllers;
//use Aggrega\Ironforge\Http\Controllers\AuthIronForge;
use Aggrega\Ironforge\Resource;
use Aggrega\Ironforge\UserIronForge;

class PublicMethods extends Controller
{
    public function getResourcesDefault($profileId){
        
        $profile = Resource::select('*')
            ->join('profile_has_resources', 'profile_has_resources.resource_id','resources.id')
            ->where('profile_has_resources.profile_id', $profileId)
            ->where('resources.can_be_default', 1)
            ->get();

        return response()->json($profile);
    }

    public function getProfile()
    {
        $auth = Auth::user();
        $user = UserIronForge::findOrFail($auth->id);
        return view('Ironforge::backend.authProfile.edit', compact('user'));
    }

    public function userUpdateStore(Request $request, $id)
    {
        $user = UserIronForge::findOrFail($id);
        $data = $request->all();

        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|unique:users,email,' . $request->route('user'),
            'password' => 'required_with:password_confirmation|confirmed',
        ]);

        $data['password'] = bcrypt($data['password']);
        $user->update( !isset($request->password) ? $request->except(['password']) : $data);
        $user->update($data);

        toastr()->success('Seus dados foram atualizados com sucesso','Sucesso');
        return redirect(route('users.profile'));
    }

}
