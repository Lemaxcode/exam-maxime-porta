import { Injectable } from '@angular/core';
import { IArticle } from './entities';
import { BehaviorSubject } from 'rxjs';
import { mockArticle } from './mock';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }
  private panier: IArticle[] = [];
 



  fetchAll(){
    return mockArticle ;
  }


}
