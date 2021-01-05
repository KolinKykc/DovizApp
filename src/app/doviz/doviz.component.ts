import { Component, OnInit } from '@angular/core';
import { DovizService } from '../doviz.service';
import { Doviz } from '../model/doviz.model';


@Component({
  selector: 'app-doviz',
  templateUrl: './doviz.component.html',
  styleUrls: ['./doviz.component.css']
})
export class DovizComponent implements OnInit {


  dovizList: Array<object> = [];

  constructor(private dovizService: DovizService) { }

  ngOnInit(){
    this.dovizService.getDovizList().subscribe((data) => {
      Object.keys(data).map((key) => {
        const pair = {};
        const k = 'key';
        const v = 'value';

        pair[k] = key;
        pair[v] = data[key];
        console.log('pair:', pair[v]);

        if (pair[k] !== 'Update_Date') {
          const dvzModel = new Doviz(
            pair[v].Buying,
            pair[v].Selling,
            pair[v].Type,
            pair[v].Name
          );
          this.dovizList.push(dvzModel);
        }
      });

    });

  }

}
