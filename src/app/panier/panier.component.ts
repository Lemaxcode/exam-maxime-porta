import { Component, inject, OnInit } from '@angular/core';
import { PanierService } from '../../shared/panier.service';
import { CommonModule, NgFor } from '@angular/common';
import { IArticle } from '../../shared/entities';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [NgFor,CommonModule,FormsModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {

  panierService = inject(PanierService)

  addPanier(article:any){
    this.panierService.addPanier(article);
  }

  removePanier(index:number){
    this.panierService.removePanier(index);
  }
 

 
  


}
