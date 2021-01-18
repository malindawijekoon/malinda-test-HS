<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/contacts', [App\Http\Controllers\ContactController::class, 'index'])->name('contacts')->middleware('auth');
Route::post('/store-contacts', [App\Http\Controllers\ContactController::class, 'store'])->name('store-contacts')->middleware('auth');

Route::get('/get-contacts', [App\Http\Controllers\ContactController::class, 'getAllContacts'])->name('get-contacts')->middleware('auth');

