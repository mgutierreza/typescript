import { Car } from "src/cars/Interface/car.interface";
import { v4 as uuid } from "uuid";

export const CARS_SEED: Car[] = [
    {
        id:uuid(),
        marca:'Toyota',
        modelo:'Corolla'
    },
    {
        id:uuid(),
        marca:'Kia',
        modelo:'Cerato'
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

]