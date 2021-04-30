import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: string = '';
  userDetail: any = {};
  userDetailFromQuery: any = {};
  title: string = '';
  name :any;
  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe(data => {
      this.userId = data.id;
      this.getUserById();
    });

    this.route.queryParams.subscribe(data => {
      this.userDetailFromQuery = data;
    });
  }

  ngOnInit(): void {
    this.title = 'User Detail';
  }

  getUserById() {
    this.userService.getUserDetail(this.userId).subscribe(data => {
      if (data) {
        this.userDetail = data;
      }
    });
  }
  alertData(event: any) {
    console.log(event);
    this.name =event.name
  }
}
