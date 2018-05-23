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

  function typeIt(words) {
  var letterIndex = 0;
  var wordIndex= 0;
  var p = $("#runningText");
  var a = 0;

  var SI = setInterval(function() {
  if (letterIndex === words[wordIndex].length) { // if at end of current word
    // wordIndex = (wordIndex + 1) % words.length;  // go to next word ----------------Use for multiple 
    letterIndex = 0;                             
   
    a++;                                  // clear output div
  }
  if(a == 0){
    p.append(words[wordIndex][letterIndex]);
    letterIndex++;
  }
  }, 70);
}




}
jQuery(window).ready(function(){
  typeIt(["Book now and receive a large discount"]);
})
