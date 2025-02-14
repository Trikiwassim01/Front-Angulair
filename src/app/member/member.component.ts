import { Component, OnInit } from '@angular/core';
import { Membre } from 'src/Models/Membre';
import { MenberService } from 'src/Services/menber.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  dataSource : Membre [] = [
   ];
    displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'createdDate', 'Actions'];  
    //injection de dependance:mecanisme qui permet d'utiliser un service dans un composant
    constructor(private MS:MenberService,private dialog:MatDialog) { }
    ngOnInit(): void {
      this.MS.GetAllMenbers().subscribe(
        (data)=>{
          this.dataSource=data;
        }
        
      )
      

    }
    delete(id:string){
      
        //lancer la boite de dialogue
        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
          height: '400px',
          width: '600px',
        });
        dialogRef.afterClosed().subscribe(result => {
          if(result){
            this.MS.deleteMenber(id).subscribe(()=>{
              this.MS.GetAllMenbers().subscribe(
                (data)=>{
                  this.dataSource=data;
                
            })
          })
          } // Pizza!gi
        });
        //tester le click sur le bouton supprimer
        }

}
