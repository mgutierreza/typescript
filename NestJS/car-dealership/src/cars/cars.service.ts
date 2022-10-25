import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './Interface/car.interface';
import {v4 as uuid} from 'uuid';

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
}
