<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserLogModel extends Model {
    const CREATED_AT = 'date_created';
    protected $table = "t_user_log";

    protected $primaryKey = "log_no";

    protected $fillable = [
        "user_id",
        "date_created"
    ];

    public $searchable = [
        "user_id",
        "date_created"
    ];

    public function user()
    {
        return $this->belongsTo(UserAccountModel::class, 'user_id', 'user_id');
    }

}