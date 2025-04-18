import { Component } from '@angular/core';
import { EventService } from 'src/Services/event.service';
import { MenberService } from 'src/Services/menber.service';
import { PubService } from 'src/Services/pub.service';
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  nb_Members: number = 0;
  nb_Articles: number = 0;
  nb_Events: number = 0;
  nb_Tools: number = 0;
  nbTeachers: number = 0;
  nbStudents: number = 0;
  nbsfax: number = 0;
  nbsousse: number = 0;
  nbtunis: number = 0;
  chartDatapie: ChartDataset[] = [
    {
      // ⤵️ Add these
      
      data: [ ]
    }
  ];
  chartLabelspie: string[] = ['Teachers', 'Students'];
  chartDatadoughnut: ChartDataset[] = [
    {
      // ⤵️ Add these
      
      data: [ ]
    }
  ];
  chartLabelsdoughnut: string[] = ['sousse', 'tunis', 'sfax'];//labell c'est laxe des x
  chartData: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: '$ in millions',
      data: [ 1551, 1688, 1800, 1895, 2124, 2124 ]
    }
  ];
  chartLabels: string[] = ['April', 'May', 'June', 'July', 'August', 'September'];
  chartOptions: ChartOptions = {};
  constructor(private MS:MenberService,private ES:EventService,private pb:PubService) {
    this.MS.GetAllMenbers().subscribe(
      (data) => {
        this.nb_Members = data.length;
        for (let i = 0; i < this.nb_Members; i++) {
          if (data[i].type == 'teacher') {
            this.nbTeachers++;
          }
          else if (data[i].type == 'student') {
            this.nbStudents++;
          }
        }
        this.chartDatapie = [
          {
            data: [this.nbTeachers, this.nbStudents]
          }
        ];
      }
    )
    
    this.ES.getAllEvents().subscribe(
      (data) => {
        this.nb_Events = data.length;
        for (let i = 0; i < this.nb_Events; i++) {
          if (data[i].lieu == 'sousse') {
            this.nbsousse++;
          }
          else if (data[i].lieu == 'tunis') {
            this.nbtunis++;
          }
          else if (data[i].lieu == 'sfax') {
            this.nbsfax++;
          }

        }
        this.chartDatadoughnut = [
          {
            data: [this.nbsousse, this.nbtunis, this.nbsfax]
          }
        ];
      }
    )
    this.pb.getAllPubs().subscribe(
      (data) => {
        this.nb_Articles = data.length;
      }
    )
  }

}
