export interface IArticle{
    id:number;
    name:string;
    price:number;
    image:string;
}

export interface IPanier{
    total:number;
    articleList:IArticle[];
}