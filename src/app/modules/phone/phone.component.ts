import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneService } from './phone.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {
  brands: any = [];
  constructor(private router: Router, private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.getBrandPhones();
  }

  goToModel(brand: any) {
    this.router.navigate(['/phone/' + brand._id])
  }

  getBrandPhones() {
    this.phoneService.getBrandPhones().subscribe((data: any) => {
      if (data) {
        this.brands = data.brands;
      }
    });
  }
}
