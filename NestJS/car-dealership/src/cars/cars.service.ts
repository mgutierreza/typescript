import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
            {
                id:1,
                Marca:'Toyota',
                Modelo:'Corolla'
            },
            {
                id:2,
                Marca:'Kia',
                Modelo:'Model'
            },
            {
                id:3,
                Marca:'Nissan',
                Modelo:'Sunny'
            },
            {
                id:4,
                Marca:'Honda',
                Modelo:'Civic'
            },
            {
                id:5,
                Marca:'Hiunday',
                Modelo:'Elantra'
            },
        ];

    findAll(){
        return this.cars;
    }

    findOneById(id: number){
        const car = this.cars.find(car => car.id === id);
        if (!car){
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return car;
    }
}
