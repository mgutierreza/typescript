import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { MarcasService } from 'src/marcas/marcas.service';
import { CARS_SEED } from './Data/cars.seed';
import { MARCAS_SEED } from './Data/marcas.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly marcaService: MarcasService,
  ){}

  populateDB(){
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.marcaService.fillMarcaWithSeedData(MARCAS_SEED);
    return 'SEED ejecutado';
  }

}
