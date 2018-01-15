import { Component, Renderer2 } from '@angular/core';
import { clickTrigger, numberTrigger, showStateTrigger, animateTrigger, listStateTrigger } from './app.animations';
import { AnimationEvent } from '@angular/animations/src/animation_event';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    clickTrigger,
    numberTrigger,
    showStateTrigger,
    animateTrigger,
    listStateTrigger
  ]
})
export class AppComponent {
  title = 'ngAnimations';
  isFavorite = false;
  clickInfo = 'default';
  paragraphInfo = 'default';
  numberEntered;
  isShown = false;
  width = 300;
  animate = false;
  testResults = [];

  constructor(private renderer: Renderer2) {}

  courseGoals = [
    {title: 'Master Angular Styling', isActiveGoal: true},
    {title: 'Understand Angular Animations', isActiveGoal: false},
    {title: 'Master Angular Animations', isActiveGoal: false}
  ];

  onShowBoring(element: HTMLElement) {
    //do not use it directly
    //element.style.display = 'block';
    //use renderer.setStyle
    this.renderer.setStyle(element, 'display', 'block');
  }

  onClickInfo() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default'
    }, 1000); //back to default after 1s
  }

  onParagraphInfo() {
    this.paragraphInfo = 'clicked';
  }

  onMouseDown() {
    this.clickInfo = 'mousedown';
  }

  onToggleButton() {
    this.isShown = !this.isShown;
  }

  onShrinkButton() {
    this.width = this.width - 50;
  }

  onAnimateButton() {
    this.animate = !this.animate;
  }

  onAddElement() {
    this.testResults.push(Math.random());
  }

  onAnimationStarted(event: AnimationEvent) {
    console.log('started', event);
  }

  onAnimationDone(event: AnimationEvent) {
    console.log('done', event);
  }
}
