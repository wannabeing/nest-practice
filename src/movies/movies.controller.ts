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

@Controller('movies')
export class MoviesController {
  // READONLY moviesService
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getMovies(): Movie[] {
    return this.moviesService.getMovies();
  }
  @Get('search')
  searchMovie(@Query('year') year: string): Movie[] {
    return this.moviesService.searchMovie(year);
  }
  @Get(':mid')
  getMovie(@Param('mid') mid: string): Movie {
    return this.moviesService.getMovie(mid);
  }

  @Post('create')
  createMovie(@Body() createData: JSON) {
    console.log('생성하고자하는데이터 ', createData);
    return this.moviesService.createMovie(createData);
  }
  @Patch(':mid')
  updateMovie(@Param('mid') mid: string, @Body() updateData: JSON) {
    console.log('업데이트하고자하는데이터 ', updateData);
    this.moviesService.updateMovie(mid, updateData);
  }
  @Delete(':mid')
  delMovie(@Param('mid') mid: string): boolean {
    return this.moviesService.delMovie(mid);
  }
}
