import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menber-form',
  templateUrl: './menber-form.component.html',
  styleUrls: ['./menber-form.component.css']
})
export class MenberFormComponent implements OnInit {
  constructor() { }
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
}
}
