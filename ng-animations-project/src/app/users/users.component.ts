import { Component, OnInit, HostBinding } from '@angular/core';
import { routeStateTrigger, routeSlideTrigger } from '../app-routing.animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    routeStateTrigger({startOpacity: 0, duration: '22300ms'}),
    routeSlideTrigger
  ]
})
export class UsersComponent implements OnInit {
  @HostBinding('@routeState') routeAnimation = true;
  //@HostBinding('@routeSlide') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
