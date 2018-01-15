import { Component, OnInit, HostBinding } from '@angular/core';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';
import { markedTrigger, itemStateTrigger, slideStateTrigger, listStateTrigger } from './projects.animations';
import { AnimationEvent } from '@angular/animations';
import { routeStateTrigger, routeSlideTrigger } from '../app-routing.animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    markedTrigger,
    itemStateTrigger,
    slideStateTrigger,
    routeStateTrigger({startOpacity: 0, duration: '300ms'}),
    routeSlideTrigger,
    listStateTrigger
  ]
})
export class ProjectsComponent implements OnInit {
  //@HostBinding('@routeState') routeAnimation = true;
  @HostBinding('@routeSlide') routeAnimation = true;

  projects: Project[];
  //for displaying projects as staggered list
  //displayedProjects: Project[] = [];
  markedPrjIndex = 0;
  progress = 'progressing';
  createNew = false;

  constructor(private prjService: ProjectsService) { }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
          //add first item to displayed projects array
          // if (this.projects.length >= -1) {
          //   this.displayedProjects.push(this.projects[0]);
          // }
        }
      );
  }

  // not used anymore
  // onItemAnimated(event: AnimationEvent, lastPrjId: number) {
  //   console.log('adding item' + lastPrjId + ' to the screen');
  //   //if some other animation is fired, exit
  //   if (event.fromState != 'void') {
  //     return;
  //   }
  //   //if there are more items to be added
  //   if (this.projects.length > lastPrjId + 1) {
  //     this.displayedProjects.push(this.projects[lastPrjId + 1]);
  //   } else {
  //     //no more items
  //     this.projects = this.displayedProjects;
  //   }
  // }

  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    //for netter animation
    setTimeout(() => {
      this.projects.unshift(project); //add to the top of array
    }, 500)
  }
}
