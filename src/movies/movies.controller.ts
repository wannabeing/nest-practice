import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  // READONLY moviesService
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getMovies(): Movie[] {
    return this.moviesService.getMovies();
  }
  @Get('search')
  searchMovie(@Query('year') year: number): Movie[] {
    return this.moviesService.searchMovie(year);
  }
  @Get(':mid')
  getMovie(@Param('mid') mid: number): Movie {
    return this.moviesService.getMovie(mid);
  }

  @Post('create')
  createMovie(@Body() createData: CreateMovieDTO) {
    console.log('생성하고자하는데이터 ', createData);
    return this.moviesService.createMovie(createData);
  }
  @Patch(':mid')
  updateMovie(@Param('mid') mid: number, @Body() updateData: UpdateMovieDTO) {
    console.log('업데이트하고자하는데이터 ', updateData);
    this.moviesService.updateMovie(mid, updateData);
  }
  @Delete(':mid')
  delMovie(@Param('mid') mid: number): boolean {
    return this.moviesService.delMovie(mid);
  }
}
