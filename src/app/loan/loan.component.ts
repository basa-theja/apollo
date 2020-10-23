import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js'

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var myLineChart = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: ["Age25", "", "", "", "", "", "Age85"],
        datasets: [{
          label: "My First dataset",
          data: [20, 25, 10, 10, 10, 35, 50],
          backgroundColor: [
            'rgba(0,128,0,.5)	',
          ],
          borderWidth: 2,
          display:false
        },
        {
          label: "My Second dataset",
          data: [20, 25, 30, 25, 30, 27, 50],
          backgroundColor: [
            'rgba(0,255,0,.5)',
          ],
          borderWidth: 2
        }
        ]
      },
      options: {
        responsive: true,
        scales: {
          xAxes: [{
            ticks: {
              fontSize: 18,
              padding: 0,
              fontColor: '#000'
            },
              gridLines: {
                  display:false
              }
          }],
          yAxes: [{
            position: 'right',
            ticks: {
              padding: 0,
              fontColor: '#000'
            },
              gridLines: {
                  display:false
              }   
          }]
      }
      }
    });
  }

}
