import { Injectable } from '@angular/core';
import { IArticle } from './entities';
import { mockPanier } from './mock';


@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }


  fetchAll(){
    return mockPanier.articleList ;
  }

  getTotal() {
    return mockPanier.total;
  }

  

  addPanier(article: IArticle) {
  
    
    mockPanier.articleList.push(article);
    mockPanier.total += article.price

    
  }

  removePanier(index:number) {
    let oldArticle = mockPanier.articleList[index];
    mockPanier.total -= oldArticle.price;
   
      mockPanier.articleList.splice(index, 1);
    }
    
  
}
