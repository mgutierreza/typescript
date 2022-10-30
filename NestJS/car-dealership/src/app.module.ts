import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { MarcasModule } from './marcas/marcas.module';

@Module({
  imports: [CarsModule, MarcasModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
