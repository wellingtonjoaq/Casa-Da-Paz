<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    // protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('auth')->only('logout');
    }


 /**
     * Sobrescreve o método de login para retornar resposta personalizada.
     */
    public function login(Request $request)
    {
        // Validação do formulário de login
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Tentativa de autenticação
        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();

            // Sucesso: Retornar uma mensagem personalizada com o usuário autenticado
            return response()->json([
                'message' => 'Login realizado com sucesso!',
                'user' => $user,
            ]);
        }

        // Falha: Retornar uma mensagem de erro
        return response()->json([
            'message' => 'Credenciais inválidas. Tente novamente.',
        ]);
    }
}
