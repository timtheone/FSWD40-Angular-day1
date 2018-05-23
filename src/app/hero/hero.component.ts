import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
	private header: string;
	private subtitle: string;
	private description: string;
	private btnText: string; 

  constructor() { 
  	this.header = "Winter Paradise";
  	this.subtitle = "We deliver your winter super experience!";
  	this.description = "Best booking agency in the alps for your awesome winter adventures!";
  	this.btnText = "Learn more";
  }
  ngOnInit() {
  }

}
