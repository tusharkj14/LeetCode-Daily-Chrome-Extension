import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import axios from "axios";

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})
export class ExtensionComponent implements OnInit {
  private query = `query {
    activeDailyCodingChallengeQuestion {
        date
        link
        question {
            questionId
            questionFrontendId
            title
            difficulty
            likes
            dislikes
            acRate
        }
    }
}`;
  private url = `https://leetcode.com/graphql/`
  // private corsProxy = `https://cors-anywhere.herokuapp.com/`;
  private corsProxy = `https://tushar-kj-cors-render-com.onrender.com/`;
  public data!:any  ;
  constructor(){}
  ngOnInit(): void {
    this.getData();
  }
  async getData(){


    const init = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query: this.query }),
    }


    this.data = await fetch(this.corsProxy + this.url, init).then(response => response.json());
    this.data = this.data.data.activeDailyCodingChallengeQuestion;

    this.data.link = "https://leetcode.com" + this.data.link;
    this.data.question.acRate = Math.round(this.data.question.acRate*100)/100;
    console.log(this.data);
  }


}
