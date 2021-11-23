import { Component, OnInit } from '@angular/core';
import { VisitorTrackerService } from 'src/app/services/firestore/visitor-tracker.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  ipDetails = {
   ipaddress: '',
   latitude: '',
   longitude:'',
   currency:'',
   currencysymbol:'',
   isp: '',
   city:'',
   country:''
  }

  visitor_count: number = 0;
  cvPath='https://drive.google.com/uc?export=download&id=';

  constructor(private counterService: VisitorTrackerService){

  }

  ngOnInit() {
    this.counterService.getVisitorCount().subscribe(res => {
      console.log('Count is: '+ res);
      this.visitor_count = res;
    });
    
    this.cvPath = this.cvPath + environment.assetsConfig.googleDriveAssets.myCVFileID;

    this.counterService.getIpAddress().subscribe(res => {
      this.ipDetails.ipaddress = res['ip'];
      this.counterService.getGEOLocation(this.ipDetails.ipaddress).subscribe(res => {
          this.ipDetails.latitude = res['latitude'];
          this.ipDetails.longitude = res['longitude'];
          this.ipDetails.currency = res['currency']['code'];
          this.ipDetails.currencysymbol = res['currency']['symbol'];
          this.ipDetails.city = res['city'];
          this.ipDetails.country = res['country_code3'];
          this.ipDetails.isp = res['isp'];
          console.log(res);
      });
    });
  }
}
