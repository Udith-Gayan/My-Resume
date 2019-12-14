import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
// import { environment } from '../../../environments/environment';
import { Model } from './contact-form';
import './../../../assets/js/smtp.js';
import { NgForm } from '@angular/forms';


declare let Email: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: Model = new Model();





  constructor(
    private profile: ProfileService,
    private snotify: SnotifyService

  ) { }

  ngOnInit() {
  
  }

  // contact() {
  //   this.profile.contactus(this.model).subscribe(data => {
  //     if (data.status) {
  //       this.snotify.success(data.message, 'Success', this.snotifyConfig);
  //     } else {
  //       this.snotify.warning(data.message, 'Warning', this.snotifyConfig);
  //     }
  //   }, err => {
  //     this.snotify.error('Something went wrong. Try again later.', 'Error', this.snotifyConfig);
  //   });
  // }


onSubmit(f: NgForm) {

  console.log('form submitted;');
  console.log(this.model.message);

  Email.send({
    // SecureToken : 'ad93ff88-96e8-4e0b-aa1a-6e2ec939db66',
    Host : 'smtp.elasticemail.com',
    Username : 'udith.indrakantha@gmail.com',
    Password : '5783dc73-acbe-4eba-b757-c053b4e1f9a2',
    To : 'udith.indrakantha@gmail.com',
    From : `udith.indrakantha@gmail.com`,
    Subject : this.model.subject,
    Body : ` <i>This is sent as a feedback from my resume page.</i> <br/>
                  <b>Name: </b>${this.model.name} <br />
                  <b>Email: </b>${this.model.email}<br />
                  <b>Subject: </b>${this.model.subject}<br />
                  <b>Message:</b> <br />
                   ${this.model.message} <br><br>
                   <b>~End of Message.~</b> `
    }).then(
      message => {alert(message);
                  f.resetForm(); }
    );

}

}
