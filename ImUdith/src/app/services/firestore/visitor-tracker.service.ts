import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import { runInThisContext } from 'vm';

@Injectable({
  providedIn: 'root'
})
export class VisitorTrackerService {
  
  private visitor_count = new BehaviorSubject<number>(0);
  sharedCount = this.visitor_count.asObservable();

  private last_visited_date = new BehaviorSubject<Date>(new Date());
  sharedDate = this.last_visited_date.asObservable();


  constructor(private firestore: AngularFirestore) { }

  getVisitorCount(): Observable<number>{
    return this.sharedCount;
  }

  getLastVisitedDate() {
    return this.sharedDate;
  }

  // this increases the visitor count by 1 and call the other method t osave it in backend
  markNewVisit() {
    this.retrievePastRecords();

    this.visitor_count.next(this.visitor_count.getValue() + 1);
    
    //Create new object to save in firebase
    let newObj = {count: this.visitor_count.getValue(), last_visited_date: new Date() };
    this.updateNewCountonFirestore(newObj);
  }

  private retrievePastRecords() {
    this.firestore.collection(environment.firebaseCollections.visitorsTracker)
                  .doc(environment.firebaseDocsIDs.visitorsTracker)
                  .get().subscribe(res =>{
                    this.visitor_count.next(res.get('count'));
                    this.last_visited_date.next(res.get('last_visited_date'));
                  }, error => {
                    console.log('error occured while retrieving the tracker details');
                  });
  }

  private updateNewCountonFirestore(newValuesObj){
    this.firestore.collection(environment.firebaseCollections.visitorsTracker)
                  .doc(environment.firebaseDocsIDs.visitorsTracker)
                  .update(newValuesObj).then(res =>{
                      console.log('Successfully updated the visit tracker.')
                  }).catch(reason => {
                    console.log('error occured while updating the tracker details');
                  });
  }
}


// TODO: Update these methods. Create the view in new component