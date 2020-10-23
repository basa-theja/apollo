import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  	canvas: any;
	ctx: any;
	
	ngAfterViewInit() {
		this.canvas = document.getElementById('myChart');
		this.ctx = this.canvas.getContext('2d');
		let myChart = new Chart(this.ctx, {
		type: 'doughnut',
		data: {
		labels: ["40% Health", "15% Misc Health", "20% Other", "25% Retirement"],
		datasets: [{
		label: '# of Votes',
		data: [40,15,20,25],
		backgroundColor: [
		'rgba(0, 102, 119, 1)',
		'rgba(107, 145, 63, 1)',
		'rgba(235, 187, 29, 1)',
		'rgba(246, 101, 3, 1)'
		],
		borderWidth: 1
		}]
		},
		options: {
		responsive: false,
		display:true
		}
		});
	}
   
  constructor() { }

  ngOnInit(): void {
  }

}
