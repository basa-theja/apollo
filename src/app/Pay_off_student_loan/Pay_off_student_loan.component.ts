import { Component, OnInit, ViewChild,AfterViewInit } from "@angular/core";
import * as Chart from 'chart.js'
@Component({
  selector: 'app-Pay_off_student_loan',
  templateUrl: './Pay_off_student_loan.component.html',
  styleUrls: ['./Pay_off_student_loan.component.css']
})
export class Pay_off_student_loanComponent implements OnInit {

  canvas: any;
  ctx: any;
  canvas1: any;
  ctx1: any;
  ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
          datasets: [{
              label: '# of Votes',
              data: [10,90],
              backgroundColor: [
                  'green',
                  '#D3D3D3'
              ],
              borderWidth: 1
          }]
      },
      options: {
        responsive: false,
 
      }
    });
    var myLineChart = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: ["Age 25","","Today","","","Age 32"],
        datasets: [{
          label: "Goal Trajectory",
          data: [0, 10, 20, 30, 40, 50],
          backgroundColor: [
            'rgba(211,211,211,0.5)',
          ],
          borderWidth: 2,
          display:false
        },
        {
          label: "Goal Progress",
          data: [0, 10, 20],
          backgroundColor: [
            "rgba(0,128,0,1)",
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

  constructor() {

   }

  ngOnInit(): void {
  }

}
