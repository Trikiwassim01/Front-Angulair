import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MenberService } from 'src/Services/menber.service';

@Component({
  selector: 'app-menber-form',
  templateUrl: './menber-form.component.html',
  styleUrls: ['./menber-form.component.css']
})
export class MenberFormComponent implements OnInit {
  constructor(private MS:MenberService,private router:Router,private activatedRoute:ActivatedRoute) { }
  form!:FormGroup;
  ngOnInit() {

    //1.recuperation de la route active
    const idcourant=this.activatedRoute.snapshot.params['id']
    console.log(idcourant);
    if (idcourant){
      this.MS.getMenberById(idcourant).subscribe((data)=>{
        console.log(data);
        this.form = new FormGroup({
          cin:new FormControl(data.cin),
          name: new FormControl(data.name),
          type: new FormControl(data.type), 
          createdDate:  new FormControl(data.createdDate)}
        )})
    }
    else{
      this.form = new FormGroup({
        cin:new FormControl(null),
        name: new FormControl(null),
        type: new FormControl(null), 
        createdDate:  new FormControl(null)}

    //2.chercher id dans la route
    //3.si id existe alors je suis en mode edition//getMenberById
    //4.si id n'existe pas alors je suis en mode creation
    

    
      )}

  

}
onsub(){
  const idcourant=this.activatedRoute.snapshot.params['id']
    console.log(idcourant);
  if(idcourant){
    this.MS.updateMenber(this.form.value,idcourant).subscribe((()=>{
      //redirection vers la page d'accueil
      this.router.navigate([''])
    }))
  }else{
  this.MS.addMenber(this.form.value).subscribe((()=>{
    //redirection vers la page d'accueil
    this.router.navigate([''])
  }))
}
}}
