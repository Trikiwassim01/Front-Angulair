import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evt } from 'src/Models/Evt';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
  getAllEvents():Observable<Evt[]>{
    return this.http.get<Evt[]>('http://localhost:3000/Evt')
  }
  addEvent(data:any):Observable<Evt>{
    return this.http.post<Evt>('http://localhost:3000/Evt',data)
  }
  getEventById(id:string):Observable<Evt>{
        return this.http.get<Evt>(`http://localhost:3000/Evt/${id}`)}
        updateEvent(Evt:Evt,id:string):Observable<void>{
          return this.http.put<void>(`http://localhost:3000/Evt/${id}`,Evt)
        }
        deleteEvent(id:string):Observable<void>{
          return this.http.delete<void>(`http://localhost:3000/Evt/${id}`)
        }
  
}
