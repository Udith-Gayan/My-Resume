import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Article } from './../../profile/portfolio/article.model';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private firestore: AngularFirestore) { }

// Retrieve all data from  store
  getArticles() {
    return this.firestore.collection('articles').snapshotChanges();
}


// ad new article to firestore
createArticle(article: Object) {
  return this.firestore.collection('articles').add(article);
}


// delete an article
deletePolicy(articleId: string) {
  this.firestore.doc('articles/' + articleId).delete();
}


}
