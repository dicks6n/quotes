
import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   title="THE PLUGRAPHER QUOTE HUB"



  quotes=[new Quote("dickson","plug masha","It is the sweet, simple things of life which are the real ones after all."),
new Quote("Umutesiwase","John wanyonyi","Life is the art of drawing without an eraser")]

  preNum:number
  lastNum:number
  counter:number

  addQuote(emittedQuote){
    this.quotes.push(emittedQuote)
  }

  upvote(i){
      this.quotes[i].upvotes+=1
  }
  downvote(i){
    this.quotes[i].downvotes+=1
  }
  delQuote(i){
    this.quotes.splice(i, 1)
  }
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }
  constructor() { }

  ngOnInit() {
  }

}
