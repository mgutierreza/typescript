import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';

import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';

@Injectable()
export class MarcasService {

  private marcas : Marca[];

  create(createMarcaDto: CreateMarcaDto) {
    const {nombre} = createMarcaDto;
    const marca: Marca = {
      id: uuid(),
      nombre: nombre.toLocaleLowerCase(),
      createdAt: new Date().getTime(),
    }

    this.marcas.push(marca);

    return marca;
  }

  findAll() {
    return this.marcas;
  }

  findOne(id: string) {
    const marca = this.marcas.find(marca => marca.id === id);
    if (!marca)
      throw new NotFoundException(`Marca con id "${id}" no encontrada`)
    return marca;
  }

  update(id: string, updateMarcaDto: UpdateMarcaDto) {

    let marcaDB = this.findOne(id);
    this.marcas = this.marcas.map( marca => {
      if (marca.id === id) {
        marcaDB.updatedAt = new Date().getTime();
        marcaDB = {...marcaDB, ...updateMarcaDto};
        return marcaDB;
      }
      return marca;  
    });
    return marcaDB;
  }

  remove(id: string) {
    this.marcas = this.marcas.filter(marca => marca.id !== id);
  }

  fillMarcaWithSeedData(marcas: Marca[]){
    this.marcas = marcas;
  }

}
