<?php

namespace Oka6\Admin;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserTableSeed::class);
        $this->call(ProfileTableSeed::class);
        $this->call(ResourceTableSeed::class);
        $this->call(TutorialTableSeed::class);
        $this->call(PagesSeed::class);
        $this->call(PlanTableSeed::class);
        $this->call(ClientTableSeed::class);
    }
}
