import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from "../../app/quotes";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
 quote: string;
 author: string;
 name: string;

  newQuote = new Quotes("", 0, 0,"", "",new Date());
  @Output() addQuote = new EventEmitter<Quotes>();


    submitQuote(form){
      console.log(form.value)
      form.value.upvote = 0
      form.value.downvote = 0
      this.addQuote.emit(form.value)
      
      
    }
    constructor() { }

  ngOnInit(): void {
  }
    
  }


