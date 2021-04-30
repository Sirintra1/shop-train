import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaService } from './cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  movies: any = [];
  constructor(private router: Router, private cinemaService: CinemaService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  goToSeat(movie: any) {
    this.router.navigate(['/cinema/' + movie._id])
  }

  getMovies() {
    this.cinemaService.getMovies().subscribe((data: any) => {
      if (data) {
        this.movies = data.movies;
      }
    });
  }
}

