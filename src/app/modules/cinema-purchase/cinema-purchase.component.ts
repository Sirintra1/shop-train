import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaService } from '../cinema/cinema.service';

@Component({
  selector: 'app-cinema-purchase',
  templateUrl: './cinema-purchase.component.html',
  styleUrls: ['./cinema-purchase.component.scss']
})
export class CinemaPurchaseComponent implements OnInit {
  isPurchase: boolean = false;
  isTicket: boolean = false;
  id: string = '';
  listSeats: any = [];
  listPurchase: any = [];
  total: number = 0;
  dateToday: any = '';
  constructor(private route: ActivatedRoute,
    private cinemaService: CinemaService,
    private router: Router) {
    this.route.params.subscribe(data => {
      if (data) {
        this.id = data.id;
        this.getMovieById();
      }
    });
  }

  ngOnInit(): void {
    this.dateToday = new Date();
  }

  purchase() {
    this.listPurchase = [];
    this.listSeats.seats.forEach((seat: any) => {
      if (seat.isSelect) {
        this.total += seat.price;
        seat.row = seat.name.substr(0, 1);
        seat.number = seat.name.substr(1, 2);
        this.listPurchase.push(seat);
      }
    });
    this.isPurchase = true;
  }

  getTicket() {
    this.isTicket = true;
  }

  getMovieById() {
    this.cinemaService.getMovieById(this.id).subscribe(data => {
      if (data) {
        this.listSeats = data;
        this.listSeats.seats.forEach((seat: any) => {
          seat.isSelect = false;
        });
      }
    });
  }
  selectSeat(itm: any) {
    itm.isSelect = !itm.isSelect;
  }
  cancel() {
    this.router.navigate(['/cinema']);
  }

  validatePurchase() {
    const purchase = this.listSeats.seats ? this.listSeats.seats.filter((itm: any) => itm.isSelect) : [];
    if (purchase.length === 0) {
      return true
    }
    return false;
  }
}
