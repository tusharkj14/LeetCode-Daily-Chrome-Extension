import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import axios from "axios";
import { HelperService } from "../helper.service";
import { keyable } from "../keyable.interface";

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})
export class ExtensionComponent implements OnInit {
  public data: keyable = {};
  constructor(private help: HelperService) { }
  ngOnInit(): void {
    this.help.getData();
    this.help.fetchData().subscribe((tempdata) => {
      this.data = tempdata!['data']!['activeDailyCodingChallengeQuestion'];
      this.data['link'] = "https://leetcode.com" + this.data['link'];
      this.data['question']['acRate'] = Math.round(this.data['question']['acRate'] * 100) / 100;

    });

  }



}
