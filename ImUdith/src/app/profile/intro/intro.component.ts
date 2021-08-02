import { Component, OnInit } from '@angular/core';
import { VisitorTrackerService } from 'src/app/services/firestore/visitor-tracker.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  visitor_count: number = 0;

  constructor(private counterService: VisitorTrackerService){
  }

  ngOnInit() {
    this.counterService.getVisitorCount().subscribe(res => {
      console.log('Count is: '+ res);
      this.visitor_count = res;
    });
  }

}
