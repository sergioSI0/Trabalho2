import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tr2 } from './tr2';


const httpOption = {
  headers :  new HttpHeaders({"Content-Type" : "application/json"})
};


@Injectable({
  providedIn: 'root'
})

export class Tr2Service{

  private url = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) { }

  getAll() : Observable<Tr2[]>{
    return this.http.get<Tr2[]>(this.url);

  }

  save(tr2 : Tr2) : Observable<Tr2>{
    return this.http.post<Tr2>(this.url, tr2, httpOption);
  }

  edit(tr2 : Tr2) : Observable<Tr2>{
    return this.http.put<Tr2>(this.url + '/' + tr2.id, tr2, httpOption);

  }

  delete(tr2 : Tr2) : Observable<Tr2>{
    return this.http.delete<Tr2>(this.url+ '/' + tr2.id);


  }



}
