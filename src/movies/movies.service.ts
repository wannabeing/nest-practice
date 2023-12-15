import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  // 가짜 DB 데이터
  private movies: Movie[] = [];

  // [GET] 영화 리스트
  getMovies(): Movie[] {
    return this.movies;
  }
  // [GET] 영화 1개
  getMovie(mid: string): Movie {
    const movie = this.movies.find((movie) => movie.mid === +mid);
    if (movie) {
      return movie;
    } else {
      throw new NotFoundException('존재하지 않는 mid입니다.');
    }
  }
  // [CREATE] 영화 1개
  createMovie(movieData) {
    this.movies.push({
      mid: this.movies.length + 1,
      ...movieData,
    });
  }
  // [UPDATE] 영화1개
  updateMovie(mid: string, updateData) {
    // mid가 존재하지 않으면 getMovie에서 throw Error
    const movie = this.getMovie(mid);

    this.delMovie(mid);
    this.movies.push({
      ...movie,
      ...updateData,
    });
  }
  // [SEARCH] 영화 1개
  searchMovie(year: string): Movie[] {
    return this.movies.filter((movie) => movie.year === +year);
  }

  // [DELETE] 영화 1개
  delMovie(mid: string): boolean {
    // mid가 존재하지 않으면 getMovie에서 throw Error
    this.getMovie(mid);

    this.movies = this.movies.filter((movie) => movie.mid !== +mid);
    return true;
  }
}
