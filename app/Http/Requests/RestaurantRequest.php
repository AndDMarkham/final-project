<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RestaurantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|alpha|max:100',
            'address' => 'required|regex:/^[\w\/\.\s]+$/imsu|min:5|max:250',
            'phone' => 'regex:/^\+*[\d\s]+$/|max:12',
            'website_url' => 'url|max:250'
        ];
    }
}
