<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\UserAccountApiController;
use App\Http\Controllers\api\UserLogApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::get('401', function () {
    return response()->json([
        'code'    => 401,
        'message' => 'Request is unauthorized.',
        'data'    => null
    ], 401);
})->name('401');

Route::prefix('v1')->group(function () {

    // Auth User
    Route::post('auth-user', [UserAccountApiController::class, 'authUserAccount']);

    
    Route::prefix('users')->group(function () {
        Route::get('get-all', [UserAccountApiController::class, 'getAllUserAccount']);
        Route::get('get/{username}', [UserAccountApiController::class, 'getUserAccount']);
        Route::get('get/password/{username}', [UserAccountApiController::class, 'getUserPassword']);
        Route::post('create', [UserAccountApiController::class, 'createUserAccount']);
        Route::patch('update/{id}', [UserAccountApiController::class, 'updateUserAccount']);

        Route::prefix('logs')->group(function () {
            Route::get('get-all', [UserLogApiController::class, 'getAllUserLog']);
            Route::get('get-by-date', [UserLogApiController::class, 'getUserLogsByDate']);
            Route::post('create', [UserLogApiController::class, 'createUserLog']);
        });
    });

    // Routes with API Token Authentication Middleware
    Route::middleware('auth:sanctum')->group(function () {

        Route::put('revoke-user/{iId}', [UserAccountApiController::class, 'revokeUserAccess']);

        Route::prefix('users')->group(function () {

        });
    }); // End of API Token Authentication Middleware 
});

