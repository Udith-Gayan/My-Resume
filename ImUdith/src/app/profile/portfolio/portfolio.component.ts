import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './../../services/firestore/articles.service';
import { Article } from './article.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private articleService: ArticlesService) { }

  isClicked = false;
  limit = 8;
  articles = Article[0];

  public blogs = [{postURL: 'https://medium.com/@udith.indrakantha/say-bye-bye-to-annoying-getters-setters-shorten-your-java-code-with-lombok-d656ae66e163',
            imgURL: 'https://miro.medium.com/max/1166/1*rOXn3DjfrIac2Zc658p-mg.png',
             title: 'Say "Bye bye!"to Annoying Getters/Setters',
             description: 'Still, there are things that a Java programmer has to do over and over again just to get the code complete from  ...'},
           {postURL: 'https://medium.com/@udith.indrakantha/upload-images-and-save-them-in-a-database-angular-8-spring-boot-mysql-b5144768202b',
           imgURL: 'https://miro.medium.com/max/800/0*qDiAkGEX7NKKv302.png',
           title: 'Upload Images with Angular and Save in a Database',
           description: 'This article is all about uploading an image through your angular project , sending it into the backend and ...'},
           {postURL: 'https://medium.com/@udith.indrakantha/simply-deploy-your-angular-app-on-netlify-edfba30301ea',
           imgURL: 'https://miro.medium.com/max/800/0*I2GxQ5YfJISdY16c.jpg',
           title: 'Deploy Your Angular Project on Netlify',
           description: 'You can deploy your Angular application securely on Netlify server . This is a free place for you to....'},
           {postURL: 'https://medium.com/@udith.indrakantha/all-about-replaceall-in-java-314696b49676',
           imgURL: 'https://miro.medium.com/max/1200/1*xAF5CV-eSKvtvN8tLLbOQA.jpeg',
           title: 'All about .replaceAll() in Java',
           description: 'java.lang.String class brings you a very powerful method to do replacements within a string.This method allows...'},
           {postURL: 'https://medium.com/@udith.indrakantha/fixing-401-error-with-cors-preflights-with-spring-boot-641d7abd8f8f',
           imgURL: 'https://miro.medium.com/max/800/0*4mvk7Rz4nSozj6gq.jpg',
           title: 'Fixing 401 Error with CORS Preflights (with Spring boot)',
           description: 'When the web application runs on a different domain and the server runs on another...'},
           {postURL: 'https://medium.com/@udith.indrakantha/issue-related-with-infinite-recursive-fetching-of-data-from-relationships-between-entity-classes-ffc5fac6c816',
           imgURL: 'https://miro.medium.com/max/956/1*NMEbPPJsnRG7tAQFnbDyHg.png',
           title: 'fetching of data from relationships between Entity classes (Spring Boot JPA Hibernate)',
           description: 'Avoid recursive fetching of ...'},
           {postURL: 'https://medium.com/@udith.indrakantha/how-to-use-ng-bootstrapped-popup-modals-within-angular-components-f952f95ebe95',
           imgURL: 'https://miro.medium.com/max/559/1*qf7UxTHhENegsCZAZOWD4w.jpeg',
           title: 'How to use ng-bootstrapped Popup Modals within Angular Components',
           description: 'Hello guys, this article is about how to add ng-bootstrapped ...'},
           {postURL: 'https://medium.com/@udith.indrakantha/send-emails-without-a-server-side-code-with-angular-e227c3e62dbd',
           imgURL: 'https://miro.medium.com/max/800/0*_vui1Vw7BYbbvnrE.png',
           title: 'Send Emails without a server-side code with Angular',
           description: 'Without any server-side code hosted on a server, you can send emails through your Angular application with ...'},
           {postURL: 'https://medium.com/@udith.indrakantha/mvc-architecture-as-a-software-architecture-e86073ac2411',
           imgURL: 'https://miro.medium.com/max/1313/1*ZwAV1NANJrJrdteG57gVzQ.jpeg',
           title: 'MVC Architecture as a Software Architecture',
           description: 'A software architecture is the way that different functioning modules or the components are interrelated in a system to achieve  ...'},
           {postURL: 'https://medium.com/javascript-in-plain-english/how-to-intercept-the-http-requests-in-angular-2a67df423020',
           imgURL: 'https://miro.medium.com/max/6830/1*PEIeGIaKBS6nrNfULdCylw.jpeg',
           title: 'How to Intercept the HTTP Requests in Angular',
           description: 'Since Angular 4.3 , a new feature has been coming to modify all outgoing http requests and incoming responses globally.  ...'}

           ];

  blogLength = this.blogs.length;

  ngOnInit() {
    // Get article data from forestore
    this.articleService.getArticles().subscribe(res => {

      // This filters data from the messy response
      this.articles = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Article;
    } );

      // tslint:disable-next-line: forin
      for (let arti of this.articles) {
        this.blogs.push(arti);
    }




  } );
}

  showMore() {
    this.limit = this.blogs.length;
    this.isClicked = true;
    console.log('moreee');
    console.log(this.articles);

  }

  showLess(){
    this.limit = 8;
    this.isClicked = false;
    console.log('Lesss');
  }

}
