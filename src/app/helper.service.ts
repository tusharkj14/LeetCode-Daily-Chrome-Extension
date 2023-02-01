import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import * as config from "./config";
import { keyable } from "./keyable.interface";


@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  public data = new Subject<keyable>();
  fetchData(): Observable<keyable> {
    return this.data;
  }


  async getData() {


    const init = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: config.query }),
    }


    let temp: keyable = await fetch(config.corsProxy + config.url, init)
      .then(response => response.json());


    this.data.next(temp);
    this.data.complete();
  }
}
