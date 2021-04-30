import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {
  @Input() userDetail: any = {};
  @Input() userDetailFromQuery: any = {};
  @Input() title: string = '';

  @Output() response: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  alertData() {
    this.response.emit({ name: 'pare' });
  }
}
