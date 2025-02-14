import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenberService } from 'src/Services/menber.service';

@Component({
  selector: 'app-menber-form',
  templateUrl: './menber-form.component.html',
  styleUrls: ['./menber-form.component.css']
})
export class MenberFormComponent implements OnInit {
  constructor(private MS:MenberService,private router:Router) { }
  form!:FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      cin:new FormControl(null),
      name: new FormControl(null),
      type: new FormControl(null), 
      createdDate:  new FormControl(null),
  })
  

}
onsub(){
  console.log(this.form.value);
  this.MS.addMenber(this.form.value).subscribe((()=>{
    //redirection vers la page d'accueil
    this.router.navigate([''])
  }))
}
}
