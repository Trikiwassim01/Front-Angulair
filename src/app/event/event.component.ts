import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Evt } from 'src/Models/Evt';
import { EventService } from 'src/Services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit ,AfterViewInit{
  constructor(private ES:EventService) {
    
   }
 // DataSource : Evt[] = [];
  dataSource!: MatTableDataSource<Evt> ;
  displayedColumns: string[] = ['id', 'titre','dateeDebut','dateFin','lieu'];
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
      this.dataSource = new MatTableDataSource(data);
    }
    )}
}
