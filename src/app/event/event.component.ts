import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Models/Evt';
import { EventService } from 'src/Services/event.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalEvtComponent } from '../modal-evt/modal-evt.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit ,AfterViewInit{
  constructor(private ES:EventService,private dialog:MatDialog) {
    this.dataSource = new MatTableDataSource()
   }
 // DataSource : Evt[] = [];
  dataSource!: MatTableDataSource<Evt> ;
  displayedColumns: string[] = ['id', 'titre','dateeDebut','dateFin','lieu','actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(){
    this.fetchData();

  }
  fetchData():void{
    this.ES.getAllEvents().subscribe((data)=>{
      this.dataSource.data =data;
    }
    )}
    open():void{
       //lancer l'ouverture de la boite de ModalEvtComponent
  const dialogRef = this.dialog.open(ModalEvtComponent, {
    height: '400px',
    width: '600px',
  });

  dialogRef.afterClosed().subscribe(data => {
    console.log("Dialog output:", data);
    // Check if data is not null or undefined
    if (data) {
      //requete post
      this.ES.addEvent(data).subscribe(() => {
        this.fetchData();
      });
    }
  });

              
              
    }
    opendit(id:string)
    {
      //lancer l'ouverture du modal
      const dialogConfig = new MatDialogConfig();
      
      //recuperer l'evenement par id
      this.ES.getEventById(id).subscribe((data)=>{
        dialogConfig.data=data
        
      let dialogRef = this.dialog.open(ModalEvtComponent, dialogConfig);
      //subscrire 
      dialogRef.afterClosed().subscribe((data: any) => {
        this.ES.updateEvent(data,id).subscribe(() => {
          this.fetchData();
        }
        );
      });
      // // //apres fermeture du modal
      // // dialogRef.afterClosed().subscribe(data => {
      // //   console.log("Dialog output:", data);
      // //   // Check if data is not null or undefined
      //       if (data) {
      //       //requete put
      //      this.ES.updateEvent(data,id).subscribe(() => {
      //        this.fetchData();
      //     });
      //   }
      //  });
    }
    )}
    delete(id:string){
      //lancer la boite de dialogue
      let dialogRef = this.dialog.open(ConfirmDialogComponent, {
        height: '400px',
        width: '600px',
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.ES.deleteEvent(id).subscribe(()=>{
            this.ES.getAllEvents().subscribe((data)=>{
              this.dataSource.data =data;
            })
          })
        }
      });}
      
  
  }
