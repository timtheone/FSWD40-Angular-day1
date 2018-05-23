import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  discount1: number;
  discount2: number;
  discount3: number;
  discount4: number;
  percent: string;
  btnText: string;

  constructor() {
    this.discount1 = 30;
    this.discount2 = 75;
    this.discount3 = 10;
    this.discount4 = 13;
    this.percent = "%";
    this.btnText = "Book now!";
   }

  ngOnInit() {
  }

}
