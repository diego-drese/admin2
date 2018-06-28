<?php

namespace Aggrega\Ironforge;

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
        $this->call(OwnerTableSeed::class);
        $this->call(ProfileTableSeed::class);
        $this->call(ResourceTableSeed::class);
        $this->call(ProfileHasResourcesTableSeed::class);

    }
}
