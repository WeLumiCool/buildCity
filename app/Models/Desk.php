<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use SebastianBergmann\CodeCoverage\Report\Xml\Project;

class Desk extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'program_id', 'balance', 'is_closed'];

    public function users()
    {
        return $this->belongsToMany(User::class, 'desk_users');
    }

    public function programs()
    {
        return $this->hasMany(Program::class);
    }
}
