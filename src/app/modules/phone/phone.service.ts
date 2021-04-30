import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private http: HttpClient) { }

  getBrandPhones() {
    return this.http.get('https://user-train.herokuapp.com/phone/brands');
  }

  getPhoneById(id: string) {
    return this.http.get('https://user-train.herokuapp.com/phone/brand/' + id);
  }
}
