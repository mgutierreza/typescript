import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from 'src/cars/cars.module';
import { MarcasModule } from 'src/marcas/marcas.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CarsModule, MarcasModule],
})
export class SeedModule {}
