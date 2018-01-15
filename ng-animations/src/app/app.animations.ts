import { trigger, state, style, transition, animate, group, keyframes } from '@angular/animations';

export const clickTrigger = trigger('clickedState', [
  state('default', style({
    backgroundColor: 'orange',
    width: '100px',
    height: '100px'
  })),
  state('clicked', style({
    backgroundColor: 'blue',
    width: '150px',
    height: '50px'
  })),
  state('mousedown', style({
    backgroundColor: 'red',
    border: '1px solid black',
    width: '100px',
    height: '100px'
  })),
  transition('default => clicked', animate('200ms 100ms ease-in')),
  transition('clicked => default', animate('300ms 100ms ease-out')),
  //transition('mousedown => clicked', animate('300ms')),
  transition('clicked <=> mousedown', animate('300ms')) //both directions
]);

export const numberTrigger = trigger('numberEnteredState', [
  state('unselected', style({
    border: '1px solid black',
    padding: '5px',
    backgroundColor: 'white'
  })),
  state('selected', style({
    border: '2px solid black',
    padding: '4px',
    backgroundColor: 'lightblue'
  })),
  transition('unselected => selected', [
    style({
      border: '2px solid black',
      padding: '4px',
      transform: 'scale(1)'
    }), //after initial state
    animate('200ms', style({
      backgroundColor: 'orange',
      transform: 'scale(1.05)'
    })),
    style({
      backgroundColor: 'green'
    }), //before final state
    animate('200ms')
  ])
]);

export const showStateTrigger = trigger('showState', [
  /*void=no element. *=any state*/
  // transition('void => *', [
  //   style({
  //     opacity: 0
  //   }),
  //   animate('500ms ease-out')
  // ]),
  // transition('* => void', animate('500ms ease-out', style({
  //     opacity: 0
  //   })))
  //or using aliases
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('500ms ease-out')
  ]),
  transition(':leave', animate('500ms ease-out', style({
      opacity: 0
    })))
]);

export const animateTrigger = trigger('animateState', [
  transition('* => *', [
    animate(400, style({
      width: 0
    })),
    animate(400, style({
      width: '*' /*wildcard for dimensional properties*/
    }))
  ])
]);

export const listStateTrigger = trigger('listState', [
  /*void=no element. *=any state*/
  // transition('void => *', [
  //   style({
  //     opacity: 0
  //   }),
  //   animate('500ms ease-out')
  // ]),
  // transition('* => void', animate('500ms ease-out', style({
  //     opacity: 0
  //   })))
  //or using aliases
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: 'white'
    }),
    group([
      animate('1000ms', style({
        opacity: 0.7
      })),
      animate('3000ms', keyframes([
        style({
          backgroundColor: 'white',
          offset: 0
        }),
        style({
          backgroundColor: 'red',
          offset: 0.8
        }),
        style({
          backgroundColor: 'green',
          offset: 1
        })
      ]))
    ]), /*group for using more animations together*/
    animate('500ms ease-out')
  ]),
  transition(':leave', animate('500ms ease-out', style({
      opacity: 0
    })))
]);
