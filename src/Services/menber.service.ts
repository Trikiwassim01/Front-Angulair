import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
///Decorateur qui permet d'indiquer que le service accepete d'etre injecté (utilisé) dans autre service ou dans un composant
@Injectable({
  providedIn: 'root'
})
export class MenberService {
    //fonction qui envoie une requete en mode GET
    //vers le back end
   
  constructor(private http:HttpClient) { }
  GetAllMenbers():Observable<any[]>{
   return this.http.get<any[]>('http://localhost:3000/menbers')  
  }
}
