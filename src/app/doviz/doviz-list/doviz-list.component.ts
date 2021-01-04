import { Component, OnInit } from '@angular/core';
import { Doviz } from '../../model/doviz.model';
import { DovizService } from '../../doviz.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-doviz-list',
  templateUrl: './doviz-list.component.html',
  styleUrls: ['./doviz-list.component.css'],
})
export class DovizListComponent implements OnInit {
  objectKeys = Object.keys;
  dovizList: Array<object> = [];
  exchangeAmount = '';

  constructor(private dovizService: DovizService) {}

  // tslint:disable-next-line: typedef
  ngOnInit() {
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

      //     Object.keys(data).map(function(key) {
      //     const pair = {};
      //     const k = 'key';
      //     const v = 'value';

      //     pair[k] = key;
      //     pair[v] = data[key];
      //     console.log("pair:" , pair[v]);

      //     if(pair[k] !== 'Update_Date'){
      //       this.dovizList.push(pair[v]);
      //     }

      // });
    });
  }
}
