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
  
}
