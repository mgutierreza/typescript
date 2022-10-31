
import { Marca } from "src/marcas/entities/marca.entity";
import { v4 as uuid } from "uuid";

export const MARCAS_SEED: Marca[] = [
    {
        id:uuid(),
        nombre:'Toyota',
        createdAt: new Date().getTime(),
    },
    {
        id:uuid(),
        nombre:'Kia',
        createdAt: new Date().getTime(),
    },
    {
        id:uuid(),
        nombre:'BMW',
        createdAt: new Date().getTime(),
    },
    {
        id:uuid(),
        nombre:'Jeep',
        createdAt: new Date().getTime(),
    },

]