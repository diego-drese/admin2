<?php

namespace Oka6\Admin;

use Illuminate\Http\Request;
use Jenssegers\Mongodb\Eloquent\Model;

class BlogCategory extends Model
{

    protected $fillable     = ['title'];
    protected $connection   = 'oka6_admin';
    protected $table        = 'oka6_blog_categories';
    const TABLE             = 'oka6_blog_categories';

}
