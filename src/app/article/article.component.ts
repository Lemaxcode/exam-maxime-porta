import { Component } from '@angular/core';
import { PanierService } from '../../shared/panier.service';
import { NgFor } from '@angular/common';
import { IArticle } from '../../shared/entities';
import { ArticleService } from '../../shared/article.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgFor],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  articles: IArticle[]=[];

  constructor(private panierService: PanierService,private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles = this.articleService.fetchAll()
  }

  addPanier(article: IArticle) {
    this.panierService.addPanier(article);
  }
}
