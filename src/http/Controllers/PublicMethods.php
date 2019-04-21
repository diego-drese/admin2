<?php

namespace Negotiate\Admin\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Negotiate\Admin\Profile;
use Negotiate\Admin\Resource;
use Negotiate\Admin\User;

class PublicMethods extends Controller {
    public function getResourcesDefault($profileId){
        $profile    = Profile::where('id', (int)$profileId)->first();
        $resources  = [];
        if(isset($profile->resources_allow)){
            $resources  = Resource::whereIn('id', $profile->resources_allow)
                ->where('can_be_default', 1)
                ->orderBY('name', 'ASC')
                ->get();
        }
        return response()->json($resources);
    }

    public function getProfile()
    {
        $auth = Auth::user();
        $user = User::findOrFail($auth->id);
        return view('Admin::backend.authProfile.edit', compact('user'));
    }

    public function userUpdateStore(Request $request, $id)
    {
        $user = User::findOrFail($id);
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
