import { Body, Controller, Get, Patch, Param, ParseIntPipe, Post, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id') id: string){
        console.log({id})
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() body: any){

        return body
    }

    @Patch(':id')
    updateCar(
        @Param('id') id: number,
        @Body() body: any)
    {
        return body
    }

    @Delete(':id')
    deleteCar(@Param('id') id: number){
        return {
            method: 'delete',
            id
        };
    }


}
