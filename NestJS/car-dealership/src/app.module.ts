import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { MarcasModule } from './marcas/marcas.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, MarcasModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
