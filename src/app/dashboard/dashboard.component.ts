import { Component } from '@angular/core';
import { EventService } from 'src/Services/event.service';
import { MenberService } from 'src/Services/menber.service';
import { PubService } from 'src/Services/pub.service';
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { concat } from 'rxjs';

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
  tab_m: string[] = [];
  NbEvt_M: number[] = [];
  tab: string[] = [];
  tab2: string[] = [];
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
      label: 'My First dataset',
      data: [  ]
    }
  ];
  chartLabels: string[] = [];
  chartDatabar: ChartDataset[] = [
    {
      // ⤵️ Add these
      label: 'My First dataset',
      data: [  ]
    }
  ];
  chartLabelsbar: string[] = [];

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
          console.log("Adding member name to chartLabels:", data[i].name); // Log each name
          this.tab_m.push(data[i].name);
          console.log("tab_m:", this.tab_m); // Log the entire array
          this.NbEvt_M.push(data[i].tabEvent.length);
          console.log( data[i].tabEvent.length);

        }
        this.chartLabels = this.tab_m;
        this.chartData = [
          {
            label: 'My First dataset',
            data: this.NbEvt_M
          }
        ];
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
        for (let i = 0; i < this.nb_Articles; i++) {
          this.tab.push(data[i].type);
        }
       // this.tab2=[...new Set(this.tab)];
       this.tab2=[...new Set(data.map((item) => item.type))];
        this.chartLabelsbar = this.tab2;
        for (let i = 0; i < this.tab2.length; i++) {
          let count = 0;
          for (let j = 0; j < this.nb_Articles; j++) {
            if (this.tab2[i] == this.tab[j]) {
              count++;
            }
          }
          this.chartDatabar[0].data?.push(count);
        }
      }
    )
  }

}
