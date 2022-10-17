import { Controller, Get } from '@nestjs/common';


@Controller('cars')
export class CarsController {

    private cars = ['Toyota','Kia','Nissan','Chevrolet','Hiunday'];

    @Get()
    getAllCars(){
        return this.cars;
    }
}
