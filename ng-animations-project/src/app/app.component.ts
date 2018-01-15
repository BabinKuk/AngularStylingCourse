import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeState', [
      transition('* => *', [
        group([
          query(':enter', [
            style({
              transform: 'translateY(-400px)',
              opacity: 0
            }),
            animate('500ms ease-out')
          ], {optional: true}),
          query(':leave', [
            animate('500ms ease-out', style({
              transform: 'translateY(400px)',
              opacity: 0
            }))
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class AppComponent {

  getAnimationData(outlet: RouterOutlet) {
    console.log(outlet);
    const routeData = outlet.activatedRouteData['animation'];
    //default
    if (!routeData) {
      return 'rootPage';
    }
    return routeData['page'];
  }
}
