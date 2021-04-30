import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  registerForm: any = FormGroup;
  users: any = [];
  isEdit: boolean = false;
  constructor(private userService: UserService, private router: Router) {
    this.clearData();
    this.getUsers();
  }

  ngOnInit(): void {
  }

  submit() {
    const param = {
      name: this.registerForm.value.name,
      surname: this.registerForm.value.surname,
      gender: this.registerForm.value.gender,
      tel: this.registerForm.value.tel
    }
    this.userService.createUser(param).subscribe(data => {
      if (data) {
        this.getUsers();
      }
    });
  }

  clearData() {
    this.registerForm = new FormGroup({
      _id: new FormControl(''),
      name: new FormControl(''),
      surname: new FormControl(''),
      gender: new FormControl(''),
      tel: new FormControl('')
    });
  }

  getUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      if (data) {
        this.users = data;
      }
    });
  }
  edit() {
    this.userService.editUsers(this.registerForm.value).subscribe(data => {
      if (data) {
        this.getUsers();
        this.clearData();
        this.isEdit = false;
      }
    });
  }

  bindData(itm: any) {
    this.isEdit = true;
    this.registerForm = new FormGroup({
      _id: new FormControl(itm._id),
      name: new FormControl(itm.name),
      surname: new FormControl(itm.surname),
      gender: new FormControl(itm.gender),
      tel: new FormControl(itm.tel)
    });
  }
  delete(_id: string) {
    this.userService.deleteUsers(_id).subscribe(data => {
      if (data) {
        this.getUsers();
      }
    });
  }
  userDetail(user: any) {
    this.router.navigate(['/user/' + user._id]);
  }

  userDetailByItem(user: any) {
    this.router.navigateByUrl('/user/' + user._id + '?name=' + user.name + 
    '&surname=' + user.surname + '&gender=' + user.gender +  '&tel=' + user.tel +  '&from=Query'); 
  }
}
