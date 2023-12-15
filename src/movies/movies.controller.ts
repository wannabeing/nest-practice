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

@Controller('movies')
export class MoviesController {
  @Get()
  getMovies(): string {
    return 'getMovies';
  }
  @Get('search')
  searchMovie(@Query('year') year: string) {
    return `search Movie${year}`;
  }
  @Get(':mid')
  getMovie(@Param('mid') mid: string): string {
    return `getMovie myID: ${mid}`;
  }

  @Post('create')
  createMovie(@Body() createData: JSON) {
    console.log(createData);
    return createData;
  }
  @Patch(':mid')
  updateMovie(@Param('mid') mid: string, @Body() updateData: JSON) {
    return {
      updateMid: mid,
      ...updateData,
    };
  }
  @Delete(':mid')
  delMovie(@Param('mid') mid: string): string {
    return `delete Movie ${mid}`;
  }
}
