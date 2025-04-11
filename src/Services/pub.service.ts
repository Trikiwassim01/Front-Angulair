import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pub } from 'src/Models/Pub';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  constructor(private http:HttpClient) { }
  getAllPubs():Observable<pub[]>{
    return this.http.get<pub[]>('http://localhost:3000/pub')
  }
  addPub(p:pub):Observable<pub>{
    return this.http.post<pub>('http://localhost:3000/pub',p)
  }
  deletePub(id:string):Observable<pub>{
    return this.http.delete<pub>('http://localhost:3000/pub/'+id)
  }
  
}
