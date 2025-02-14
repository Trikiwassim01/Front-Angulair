import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Membre } from 'src/Models/Membre';
///Decorateur qui permet d'indiquer que le service accepete d'etre injecté (utilisé) dans autre service ou dans un composant
@Injectable({
  providedIn: 'root'
})
export class MenberService {
    //fonction qui envoie une requete en mode GET
    //vers le back end
   
  constructor(private http:HttpClient) { }
  GetAllMenbers():Observable<Membre[]>{
   return this.http.get<Membre[]>('http://localhost:3000/menbers')  
  }
  addMenber(menber:Membre):Observable<void>{
    return this.http.post<void>('http://localhost:3000/menbers',menber)}
    deleteMenber(id:string):Observable<void>{
      return this.http.delete<void>(`http://localhost:3000/menbers/${id}`)
    }
    getMenberById(id:string):Observable<Membre>{
      return this.http.get<Membre>(`http://localhost:3000/menbers/${id}`)}
      updateMenber(menber:Membre,id:string):Observable<void>{
        return this.http.put<void>(`http://localhost:3000/menbers/${id}`,menber)
      }
}
