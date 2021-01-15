<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory;

    protected $fillable = ['cost', 'closing_amount'];

    public function desk()
    {
        return $this->belongsTo(Desk::class);
    }
}
