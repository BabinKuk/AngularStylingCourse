import { Component } from '@angular/core';
import { animate, style, transition, trigger, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('panelState', [
      transition(':enter', [
        group([
          query(':self', [
            style({
              opacity: 0
              //transform: 'translateX(100%)'
            }),
            animate(1200)
          ]), //for parent element on which the triggera is applied
          //use query instead to get different animations for each element
          query('.panel-heading', [
            style({
              transform: 'translateY(-300px)',
              opacity: 0
            }),
            animate('300ms ease-out')
          ]), //slide down
          query('.panel-body', [
            style({
              transform: 'translateX(-300px)',
              opacity: 0
            }),
            animate('300ms ease-out')
          ]), //slide from left
          query('.panel-footer', [
            style({
              transform: 'translateY(300px)',
              opacity: 0
            }),
            animate('300ms ease-out')
          ]) //slide up
        ]) //grouping animations to run together
      ]),
      transition(':leave', [
        animate(200, style({
          transform: 'translateX(-100%)',
          opacity: 0
        }))
      ]),
      transition('* => *', [
        query(':enter', [
          style({
            transform: 'scale(1)'
          }),
          animate('200ms', style({
            transform: 'scale(1.1)'
          })),
          animate('100ms')
        ], {optional: true}), //for added/removed child elements
        query('div p, button', [
          animate('200ms', style({
            color: 'red'
          })),
          animate('200ms')
        ]) //combine selectors
      ]) //from any to any state
    ])
  ]
})
export class AppComponent {
  showPanel = false;
  showParagraph = true;
}
