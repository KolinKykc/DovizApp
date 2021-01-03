import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {Doviz} from '../app/model/doviz.model';


@Injectable({
  providedIn: 'root'
})
export class DovizService {


  private dovizUrl = 'https://finans.truncgil.com/v2/today.json';

  constructor(private http: HttpClient) {
  }

  getDovizList(): Observable<Doviz> {
    return this.http.get<Doviz>(this.dovizUrl);
  }

}
