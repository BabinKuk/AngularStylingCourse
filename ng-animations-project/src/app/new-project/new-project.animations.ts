import { trigger, state, style, transition, group, animate, query } from '@angular/animations';

export const buttonStateTrigger = trigger('buttonState', [
  state('valid', style({
    backgroundColor: 'lightgreen',
    bordercolor: 'green',
    color: 'green'
  })),
  state('invalid', style({
    backgroundColor: 'red',
    borderColor: 'darkred',
    color: 'white'
  })),
  transition('invalid => valid', [
    group([
      animate('100ms', style({
        transform: 'scale(1.1)'
      })),
      animate('200ms', style({
        backgroundColor: 'green'
      }))
    ]),
    animate('200ms', style({
      transform: 'scale(1)'
    }))
  ]),
  transition('valid => invalid', [
    group([
      animate('100ms', style({
        transform: 'scale(1.1)'
      })),
      animate('200ms', style({
        backgroundColor: 'red'
      }))
    ]),
    animate('200ms', style({
      transform: 'scale(1)'
    }))
  ])
]);

export const formStateTrigger = trigger('formState', [
  transition('* => *', [
    query('input.ng-invalid:focus', [
      animate('200ms', style({
        backgroundColor: 'red'
      })),
      animate('200ms')
    ], {optional: true}) // all invalid input elements
  ])
]);
