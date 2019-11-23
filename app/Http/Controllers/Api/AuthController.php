<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;

class AuthController extends Controller
{
    public function registration(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'user_name' => ['required', 'string', 'max:255'],
            'date_of_birth' => ['required', 'date', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed']
        ]);
    
        if ($validator->fails())
        {
            return response(['errors'=>$validator->errors()->all()], 422);
        }
    
        $user = User::create([
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'username' => $request['username'],
            'date_of_birth' => $request['date_of_birth'],
            'email' => $request['email'],
            'password' => Hash::make($request['password']),
        ]);

        $user->diets()->attach($request['diet']);
    
        $token = $user->createToken('Laravel Password Grant Client')->accessToken;
        $response = ['token' => $token];
    
        return response($response, 200);

    }

    public function login(Request $request)
    {
        $email = $request->email;
        $username = $request->username;
        $user = User::where('email', $email)
            ->orWhere('username', $username)
            ->first();

        if ($user) {

            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $response = ['token' => $token];
                return response($response, 200);

            } else {
                $response = "Password does not match";
                return response($response, 422);
            }
    
        } else {
            $response = 'User does not exist';
            return response($response, 422);
        }
        

    }

    public function logout()
    {
        $token = $request->user()->token();
        $token->revoke();

        $response = 'You have been logged out!';
        return response($response, 200);
    }

}
