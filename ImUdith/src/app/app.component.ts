import { Component } from '@angular/core';
import { VisitorTrackerService } from './services/firestore/visitor-tracker.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  constructor(private counterService: VisitorTrackerService){
    this.counterService.retrievePastRecords();
  }

  
}
