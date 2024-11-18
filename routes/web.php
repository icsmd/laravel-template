<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\front\AuthFrontController;
use App\Http\Controllers\front\ActgFrontController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::get('/', [ AuthFrontController::class, 'checkSession' ]);
Route::post('auth/log-in', [ AuthFrontController::class, 'login' ]);
Route::post('auth/log-out', [ AuthFrontController::class, 'logout' ]);

Route::middleware([ 'session.check'])->group(function () {

    Route::get('front/{any?}', function () {
        return view('main');
    })->where('any', '.*');

    Route::post('auth/change-password', [ AuthFrontController::class, 'changePassword' ]);
    Route::prefix('user')->group(function () {
        Route::get('session', [ AuthFrontController::class, 'getUserSession' ]);
    });
    
    // USER LOG
    Route::get('user-logs/get-list', );
});

Route::get('sys-clear', function () {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('route:clear');
    Artisan::call('view:clear');
    Artisan::call('optimize');
    return 'Cleared all cache!';
});
