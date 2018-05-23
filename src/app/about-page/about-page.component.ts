import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
	private imgAbout1 : string;
	private imgAbout2 : string;
	private figcaption1 : string;
	private figcaption2 : string;
  constructor() { 
  	this.imgAbout1 = "https://www.codefactory.academy/schahnaz-is-westenberger/images/portraitsNew/timTransparent2.png";
  	this.imgAbout2 = "../assets/denis.png";
  	this.figcaption1 = "Tim the one";
  	this.figcaption2 = "Denis Papi";
  }

  ngOnInit() {
  }

}
