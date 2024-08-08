import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { PanierComponent } from './panier/panier.component';
import { Error404Component } from './error404/error404.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"article", component:ArticleComponent},
    {path:"panier", component:PanierComponent},
    {path:"**", component:Error404Component}


];

