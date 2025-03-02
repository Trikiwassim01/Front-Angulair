import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-evt',
  templateUrl: './modal-evt.component.html',
  styleUrls: ['./modal-evt.component.css']
})
export class ModalEvtComponent {
  //forcage de type => Boite
  constructor(public dialogRef:MatDialogRef<ModalEvtComponent>, @Inject(MAT_DIALOG_DATA) data :any)  { 
    console.log("data recu",data)
    if(data)
    {
      this.form=new FormGroup({
        titre:new FormControl(data.titre),
      dateeDebut:new FormControl(data.dateeDebut),
      dateFin:new FormControl(data.dateFin),
      lieu:new FormControl(data.lieu),
      }

      )

    }
    else{
      this.form=new FormGroup({
      titre:new FormControl(null),
      dateeDebut:new FormControl(null),
      dateFin:new FormControl(null),
      lieu:new FormControl(null),
        })}
  }
  //declarer form 
  form!:FormGroup;
  //initialiser form

  //save et close
  save() {
    this.dialogRef.close(this.form.value);
}

close() {
    this.dialogRef.close();
}


}
