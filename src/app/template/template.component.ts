import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  constructor(private router:Router){}
  
  isLoding = false;
  ngOnInit()
{
  this.router.events.subscribe(() => {
    this.isLoding = this.router.url.includes(''); // Vérifie si l'URL contient "/login"
  console.log("isLogin",  this.isLoding )
  });
}

}
