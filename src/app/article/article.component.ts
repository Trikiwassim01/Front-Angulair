import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { pub } from 'src/Models/Pub';
import { PubService } from 'src/Services/pub.service';
import { PubDetailsComponent } from '../pub-details/pub-details.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  //injection de la dependance
  constructor(private PS:PubService,private dialog:MatDialog) { 
    this.dataSource = new MatTableDataSource()
  }
  displayedColumns: string[] = ['id', 'type', 'titre', 'lien', 'date', 'sourcepdf','actions'];
  dataSource!: MatTableDataSource<pub> ;
  //dataSource : pub [] = []
  ngOnInit() {
    this.fetch();
    
  }
  fetch(){
    this.PS.getAllPubs().subscribe(
      (data)=>{
        this.dataSource.data = data;}
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
   open():void{
  //        //lancer l'ouverture de la boite de ModalEvtComponent
  //   const dialogRef = this.dialog.open(, {
  //     height: '400px',
  //     width: '600px',
  //   });
  
  //   dialogRef.afterClosed().subscribe(data => {
  //     console.log("Dialog output:", data);
  //     // Check if data is not null or undefined
  //     if (data) {
  //       //requete post
  //       this.ES.addEvent(data).subscribe(() => {
  //         this.fetchData();
  //       });
  //     }
  //   });
  
                
                
      }
      openVis(id:string):void{
        //ouverture de la boite de dialogue
        //lancer la boite de dialogue
        const x =new MatDialogConfig();
        x.data=id;
         let dialogRef = this.dialog.open(PubDetailsComponent,x );
        
        
      }

}
