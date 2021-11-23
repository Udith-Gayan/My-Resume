import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VisitorTrackerService {
  
  private visitor_count = new BehaviorSubject<number>(0);
  sharedCount = this.visitor_count.asObservable();

  private last_visited_date = new BehaviorSubject<Date>(new Date());
  sharedDate = this.last_visited_date.asObservable();


  constructor(private firestore: AngularFirestore, private http: HttpClient) {
  }

  getVisitorCount(): Observable<number>{
    return this.sharedCount;
  }

  getLastVisitedDate() {
    return this.sharedDate;
  }

  // this increases the visitor count by 1 and call the other method t osave it in backend
  private markNewVisit() {
    this.visitor_count.next(this.visitor_count.getValue() + 1);
    
    //Create new object to save in firebase
    let newObj = {count: this.visitor_count.getValue(), last_visited_date: new Date() };
    this.updateNewCountonFirestore(newObj);
  }

  retrievePastRecords() {
    this.firestore.collection(environment.firebaseCollections.visitorsTracker)
                  .doc(environment.firebaseDocsIDs.visitorsTracker)
                  .get().subscribe(res => {
                    this.visitor_count.next(res.get('count'));
                    this.last_visited_date.next(res.get('last_visited_date'));
                    this.markNewVisit();
                  }, error => {
                    console.log('error occured while retrieving the tracker details');
                  }
    );
  }

  private updateNewCountonFirestore(newValuesObj){
    if(environment.production) {
      this.firestore.collection(environment.firebaseCollections.visitorsTracker)
                    .doc(environment.firebaseDocsIDs.visitorsTracker)
                    .update(newValuesObj).then(res =>{
                        console.log('Successfully updated the visit tracker.')
                    }).catch(reason => {
                      console.log('error occured while updating the tracker details');
                    });
    }
  }


  getIpAddress() {
    return this.http
          .get('https://api.ipify.org/?format=json')
          .pipe(
            catchError(this.handleError)
          );
  }

  getGEOLocation(ip) {
    // Update your api key to get from https://ipgeolocation.io
    let url = "https://api.ipgeolocation.io/ipgeo?apiKey=b3a90a211b56453193b1f1a8180288ed&ip="+ip; 
      return this.http
            .get(url)
            .pipe(
              catchError(this.handleError)
            );
  } 

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }


}


// TODO: Update these methods. Create the view in new component