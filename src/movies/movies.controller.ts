import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getMovies(): string {
    return 'getMovies';
  }
  @Get('/:mid')
  getMovie(@Param('mid') mid: string): string {
    return `getMovie myID: ${mid}`;
  }

  @Post('/create')
  createMovie(): string {
    return 'create Movie';
  }
  @Patch(':mid')
  updateMovie(@Param('mid') mid: string): string {
    return `update Movie ${mid}`;
  }
  @Delete('/:mid')
  delMovie(@Param('mid') mid: string): string {
    return `delete Movie ${mid}`;
  }
}
