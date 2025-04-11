import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-pub-modal',
  templateUrl: './pub-modal.component.html',
  styleUrls: ['./pub-modal.component.css']
})
export class PubModalComponent {
  constructor(public dialogRef:MatDialogRef<PubModalComponent>){
    this.form=new FormGroup({
      titre:new FormControl(null),
      type:new FormControl(null),
      lien:new FormControl(null),
      sourcepdf:new FormControl(null),
      date:new FormControl(null),
      
  })}
 
  selectedValue!: string;
  foods: Food[] = [
    {value: 'conf', viewValue: 'conf'},
    {value: 'journal', viewValue: 'journal'},
    {value: 'workshop', viewValue: 'workshop'},
  ];
  form!:FormGroup;
  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}

}
