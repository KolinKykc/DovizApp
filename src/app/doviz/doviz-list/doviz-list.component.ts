import { Component, OnInit } from '@angular/core';
import { Doviz } from '../../model/doviz.model';
import { DovizService } from '../../doviz.service';


@Component({
  selector: 'app-doviz-list',
  templateUrl: './doviz-list.component.html',
  styleUrls: ['./doviz-list.component.css']
})
export class DovizListComponent implements OnInit {

  objectKeys = Object.keys;
  filtered: any;
  dovizList: Array<object> = [];
  selected: any;


  constructor(private dovizService: DovizService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.dovizService.getDovizList().subscribe( data => {

        Object.keys(data).map(function(key) {
        const pair = {};
        const k = 'key';
        const v = 'value';

        pair[k] = key;
        pair[v] = data[key];
        console.log("pair:" , pair[v]);

        if(pair[k] !== 'Update_Date'){
          this.dovizList.push(pair[v]);
        }

    });
    });
  }


}