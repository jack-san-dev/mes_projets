<?php

namespace App\Http\Validation;

class LoginValidation {
    public function rules() {
        return [
            'email' => ['required', 'email'],
            'password' => ['required', 'string'],
        ];
    }

    public function messages() {
        return [
            'email.required' => 'Vous devez specifier votre email',
            'password.required' => 'Vous devez spécifier votre mot de passe',
        ];
    }
}