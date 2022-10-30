import { Body, Controller, Get, Patch, Param, ParseIntPipe, Post, Delete, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string){
        console.log({id})
        return this.carsService.findOneById(id);
    }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto){
        return this.carsService.create(createCarDto);
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
