import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneService } from '../phone/phone.service';

@Component({
  selector: 'app-phone-purchase',
  templateUrl: './phone-purchase.component.html',
  styleUrls: ['./phone-purchase.component.scss']
})
export class PhonePurchaseComponent implements OnInit {

  isConfirm: boolean = false;
  isPurchase: boolean = false;
  id: string = '';
  phone: any = {};
  purchaseList: any = [];
  total: number = 0;
  constructor(private route: ActivatedRoute,
    private phoneService: PhoneService,
    private router: Router) {
    this.route.params.subscribe(data => {
      if (data) {
        this.id = data.id;
        this.getPhoneById();
      }
    });
  }

  ngOnInit(): void {
  }

  confirm() {
    this.purchaseList = [];
    this.phone.models.forEach((phone: any) => {
      if (phone.qty > 0) {
        phone.amount = phone.qty * phone.price
        this.purchaseList.push(phone);
      }
    });
    this.isConfirm = !this.isConfirm;
  }
  purchase() {
    this.purchaseList.forEach((phone: any) => {
      this.total += phone.amount;
    });

    this.isPurchase = true;

  }
  getPhoneById() {
    this.phoneService.getPhoneById(this.id).subscribe(data => {
      if (data) {
        this.phone = data;
        this.phone.models.forEach((phone: any) => {
          phone.qty = 0;
          phone.soldOut = false;
        });
      }
    });
  }
  addQty(item: any) {
    item.qty += 1;
    if (item.stock === item.qty) {
      item.soldOut = true
    }
  }

  deleteQty(item: any) {
    item.qty -= 1;
  }
  cancel() {
    this.router.navigate(['/phone']);
  }

  validatePurchase() {
    const purchase = this.phone.models ? this.phone.models.filter((itm: any) => itm.qty > 0) : [];
    if (purchase.length === 0){
      return true
    }
    return false;
  }
}
