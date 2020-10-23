import { Component, OnInit,AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
   
  title = 'demo2';
  chart=[];
  chart1=[];
  constructor() { }

  ngOnInit() {
    this.chart=new Chart('doughnut',{
      type: 'doughnut',
      data: {
          datasets: [{
              label: '# of Votes',                            
              data: [20,80],
              backgroundColor: [
        
                'rgba(1,102,123,1)',
                'rgba(203, 203, 203, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: false,
        display:true
      }
    })

    new Chart('doughnutChart',{
      type: 'doughnut',
      data: {
          datasets: [{
              label: '# of Votes',                            
              data: [30,70],
              backgroundColor: [
        
                'rgba(1,102,123,1)',
                'rgba(203, 203, 203, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: false,
        display:true
      }
    })


  }
}

  

  