import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';

@Injectable()
export class PokemonService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>
    ){ }

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.nombre = createPokemonDto.nombre.toLocaleLowerCase();
    
    try{
      const pokemon = await this.pokemonModel.create(createPokemonDto);    
      return pokemon;
    }
    catch(error) {
      this.handleException(error);
    }
        
  }

  async findAll() {
    let pokemon : Pokemon;

    return pokemon;
  }

  async findOne(campo: string) {
    let pokemon: Pokemon;

    if(!isNaN(+campo)) {
      pokemon = await this.pokemonModel.findOne({numero:campo});
    }
    
    if(!pokemon && isValidObjectId(campo)){
      pokemon = await this.pokemonModel.findById(campo);
    }

    if(!pokemon) 
    {
      pokemon = await this.pokemonModel.findOne({ nombre: campo.toLowerCase().trim() });
    } 

    if(!pokemon) 
      throw new NotFoundException(`Pokemon con id, nombre o numero "${campo}" no existe`)

    return pokemon;
  }

  async update(campo: string, updatePokemonDto: UpdatePokemonDto) {

    const pokemon = await this.findOne(campo);

    if (updatePokemonDto.nombre)
      updatePokemonDto.nombre = updatePokemonDto.nombre.toLowerCase();
    
      try{
        await pokemon.updateOne(updatePokemonDto, {new: true});
        return {...pokemon.toJSON(), ...updatePokemonDto};
      }
      catch(error) {
        this.handleException(error);
      }


  }

  async remove(id: string) {
    ///const pokemon = await this.findOne(id);
    ///await pokemon.deleteOne();
    const result = this.pokemonModel.findByIdAndDelete(id);
    return result;
  }

private handleException(error: any){
    if (error.code === 11000){
      throw new BadRequestException(`Pokemon existe en BD ${ JSON.stringify(error.keyValue) }`);
    }
    console.log(error);
    throw new InternalServerErrorException(`No se puede crear el pokemon - Verifique los LOG del servidor`);
  }

}