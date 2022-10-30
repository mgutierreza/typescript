import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './Interface/car.interface';
import {v4 as uuid} from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {

    private cars: Car[] = [
            {
                id:uuid(),
                marca:'Toyota',
                modelo:'Corolla'
            },
            {
                id:uuid(),
                marca:'Kia',
                modelo:'Model'
            },
            {
                id:uuid(),
                marca:'Nissan',
                modelo:'Sunny'
            },
            {
                id:uuid(),
                marca:'Honda',
                modelo:'Civic'
            },
            {
                id:uuid(),
                marca:'Hiunday',
                modelo:'Elantra'
            },
        ];

    findAll(){
        return this.cars;
    }

    findOneById(id: string){
        const car = this.cars.find(car => car.id === id);
        if (!car){
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return car;
    }

    create(createCarDto: CreateCarDto){
        
        const car: Car = {
            id: uuid(),
            //marca: createCarDto.marca,
            //modelo: createCarDto.modelo,
            ...createCarDto        
        }
        this.cars.push(car);
        return car;
    }

    update(id:string, updateCarDto: UpdateCarDto){
        
        let carDB = this.findOneById(id);
        
        if (updateCarDto.id && updateCarDto.id !== id)
            throw new BadRequestException(`Car id is not valid`);

        this.cars = this.cars.map(car => {
            if (car.id === id)
            {
                carDB = {...carDB, ...updateCarDto, id}
                return carDB;
            }
            return car;
        })
        return carDB;
    }

    delete(id:string){
        const car = this.findOneById(id);
        this.cars = this.cars.filter(car => car.id !== id);
    }

}
