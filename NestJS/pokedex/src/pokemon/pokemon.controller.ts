import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':campo')
  findOne(@Param('campo') campo: string) {
    return this.pokemonService.findOne(campo);
  }

  @Patch(':campo')
  @HttpCode(HttpStatus.OK)
  update(@Param('campo') campo: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(campo, updatePokemonDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.pokemonService.remove(id);
  }
}
