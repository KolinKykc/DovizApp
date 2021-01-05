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
  exchangeForm: FormGroup;
  output: number;

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

    });


    this.exchangeForm = new FormGroup({

      'exchangeAmount': new FormControl(null),
      'currency1': new FormControl(null),
      'currency2': new FormControl(null),
    });

  }

  clickEvent(){
    this.output = this.exchangeForm.value;
    console.log(this.exchangeForm.value);
    // tslint:disable-next-line: max-line-length
    this.output = parseFloat(this.exchangeForm.value.exchangeAmount) * parseFloat(this.exchangeForm.value.currency1) / parseFloat(this.exchangeForm.value.currency2);
    console.log(parseFloat(this.exchangeForm.value.exchangeAmount));
    console.log(parseFloat(this.exchangeForm.value.currency1));
    console.log(parseFloat(this.exchangeForm.value.currency2));
    console.log(this.output);

    return this.output;
  }
}
