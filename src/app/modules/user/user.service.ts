import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(param: any) {
    return this.http.post('https://user-train.herokuapp.com/user', param);
  }

  getUsers() {
    return this.http.get('https://user-train.herokuapp.com/users');
  }

  editUsers(param: any) {
    return this.http.put('https://user-train.herokuapp.com/user', param);
  }

  deleteUsers(id: string) {
    return this.http.delete('https://user-train.herokuapp.com/user/' + id);
  }

  getUserDetail(id: string) {
    return this.http.get('https://user-train.herokuapp.com/user/' + id);
  }
}
