import { Component, OnInit } from '@angular/core';
import { MenberService } from 'src/Services/menber.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  dataSource : any [] = [
   ];
    displayedColumns: string[] = ['id', 'cin', 'name', 'type', 'createdDate', 'Actions'];  
    //injection de dependance:mecanisme qui permet d'utiliser un service dans un composant
    constructor(private MS:MenberService) { }
    ngOnInit(): void {
      this.MS.GetAllMenbers().subscribe(
        (data)=>{
          this.dataSource=data;
        }
      )

    }

}
