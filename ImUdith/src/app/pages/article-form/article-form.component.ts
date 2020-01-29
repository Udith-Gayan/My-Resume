import { Component, OnInit } from '@angular/core';
import { Article } from './../../profile/portfolio/article.model';
import { ArticlesService } from './../../services/firestore/articles.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  article: Object = {};
  user: Object = {password:''};
  constructor(private articleService: ArticlesService, private router: Router, private rmodule: RouterModule ) { }

  ngOnInit() {
  }

  onSubmit(){
    if (this.user.password === 'iamudith') {
        this.articleService.createArticle(this.article).then(
          res => {console.log('Submitted');
          alert('Subitted Successfully');
                  this.router.navigate(['/#']);
         });
    } else {
      alert('Password incorrect');
    }
  }

}
