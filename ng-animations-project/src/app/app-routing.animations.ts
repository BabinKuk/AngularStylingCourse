import { trigger, transition, style, animate, animation, useAnimation } from '@angular/animations';

// reusable animation
const fadeAnimation = animation([
  style({
    opacity: '{{ startOpacity }}'
  }),
  animate('{{ duration }}')
], {params: {startOpacity: 0, duration: '20000ms'}});

export const routeStateTrigger = (params) => trigger('routeState', [
  transition(':enter', [
    //start state
    // style({
    //   opacity: 0
    // }),
    // animate('300ms')
    useAnimation(fadeAnimation, {params: params})
  ]),
  transition(':leave', animate('300ms', style({
    opacity: 0
  })))
]);

export const routeSlideTrigger = trigger('routeSlide', [
  transition(':enter', [
    //start state
    style({
      transform: 'translateY(-100%)', //slide down
      opacity: 0
    }),
    animate('300ms')
  ]),
  transition(':leave', animate('300ms', style({
    transform: 'translateY(100%)', //slide down again
    opacity: 0
  })))
]);
