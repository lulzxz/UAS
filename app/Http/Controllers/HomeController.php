<?php

namespace App\Http\Controllers;

use App\Http\Resources\HomeCollection;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Homepage;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Homepage', [
            'title' => 'Naokids',
        ]);
    }
}
