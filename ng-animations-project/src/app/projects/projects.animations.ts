import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
  state('default', style({
    /*styling only components that are changing*/
    border: '1px solid black',
    backgroundColor: 'transparent',
    padding: '20px'
  })),
  state('marked', style({
    border: '2px solid blue',
    backgroundColor: '#caeff9',
    padding: '19px'
  })),
  transition('default => marked', [
    style({
      border: '2px solid black',
      padding: '19px'
    }),
    animate('200ms ease-out', style({
      transform: 'scale(1.05)'
    })),
    animate('200ms')
  ]),
  transition('marked => default', [
    style({
      border: '1px solid blue',
      padding: '20px'
    }),
    animate('300ms ease-out')
  ])
]);

export const itemStateTrigger = trigger('itemState', [
  /*adding item to the list*/
  /* transition(':enter', [
    //lets use keyframes instead
    // style({
    //   opacity: 0,
    //   transform: 'translateX(-100%)' //move to the left full width
    // }),
    // animate('500ms ease-out', style({
    //   opacity: 1,
    //   transform: 'translateX(0)'
    // }))
    // animate('1000ms ease-out', keyframes([
    //   //starting style
    //   style({
    //     opacity: 0,
    //     transform: 'translateX(-100%)',
    //     offset: 0
    //   }),
    //   style({
    //     opacity: 1,
    //     transform: 'translateX(15%)', //little bump effect to the right
    //     offset: 0.4
    //   }),
    //   //end style
    //   style({
    //     opacity: 1,
    //     transform: 'translateX(0)',
    //     offset: 1
    //   })
    // ]))
  ]), */
  transition(':leave', [
    animate('1000ms ease-in', keyframes([
      // start style
      style({
        opacity: 1,
        transform: 'translateX(0)' /*move to the right*/
      }),
      style({
        transform: 'translateX(-15%)' // little bump effect to the left
      }),
      // end effect
      style({
        opacity: 0,
        transform: 'translateX(100%)'
      })
    ]))
  ]),
  // list slide after clicking create new project button
  transition('slidUp => slidDown', [
    style({
      transform: 'translateY(-100%)' // slide down
    }),
    animate('500ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ]),
  transition('slidDown => slidUp', [
    style({
      transform: 'translateY(0)'
    }),
    animate('500ms ease-out', style({
      transform: 'translateY(-100%)' // slide up
    }))
  ])
]);

export const slideStateTrigger = trigger('slideState', [
  // enter transition
  transition(':enter', [
    // start style
    style({
      transform: 'translateY(-100%)' // slide down
    }),
    animate('500ms ease-out', style({
      transform: 'translateY(0)'
    }))
  ]),
  // leave transition
  transition(':leave', [
    // start style
    style({
      transform: 'translateY(0)'
    }),
    animate('500ms ease-out', style({
      transform: 'translateY(-100%)' // slide up
    }))
  ])
]);

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(':enter', [
      // start style
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
        offset: 0
      }), // angular bug first animation removed from stagger
      stagger('200ms', [
        animate('1000ms ease-out', keyframes([
          style({
            opacity: 1,
            transform: 'translateX(15%)', // little bump effect to the right
            offset: 0.4
          }),
          // end style
          style({
            opacity: 1,
            transform: 'translateX(0)',
            offset: 1
          })
        ]))
      ])
    ], {optional: true}) // new items added in the dom
  ]) // from any to any
]);
