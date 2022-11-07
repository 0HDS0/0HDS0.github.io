import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  postNews(news: any){
    let newsList:Array<any> = JSON.parse(localStorage.getItem('NewList') || []);
    newsList:push(news);
    localStorage.setItem('newsList', JSON.stringify(newsList))
  }
  getNews(){

  }
  putNews(){

  }
  deleteNews(){

  }
}
