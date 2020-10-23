import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  opened:boolean = false;

  menuArray:boolean[] = [true, false, false, false, false, false, false];

  ngOnInit(): void {

  }

  onClick(value){
    this.menuArray = [false, false, false, false, false, false, false];
    this.menuArray[value] = true;
  }

}
