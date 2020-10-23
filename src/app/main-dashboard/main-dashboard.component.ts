import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  dashboardArray:boolean[] = [true, false, false, false, false];
  constructor() { }

  ngOnInit(): void {

  }

  onClick(value){
    this.dashboardArray = [false, false, false, false, false];
    this.dashboardArray[value] = true;
  }


}
