import { Component } from '@angular/core';
import { AuthServiceService } from 'src/Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private Auth:AuthServiceService,private router:Router) { }
  email: string='';
  password: string='';
 onSubmit(){
   console.log(this.email);
   console.log(this.password);
  //genaration de la requete
  //JWT a travers la service auth service
  this.Auth.signInWithEmailAndPassword(this.email,this.password)
  .then(()=>{
    //action si la requete est reussi
    console.log('connexion reussi')
    this.router.navigate(['/members'])
  })
  
  }

}
