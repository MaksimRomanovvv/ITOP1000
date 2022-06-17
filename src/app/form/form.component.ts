import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() USD: number = 0;
  UAH = 1;
  @Input() EUR: number = 0;


  handleNumber(event: any, input: any, firstCurr: any, secondCurr: any) {
    const res = (event.value * firstCurr.value) / secondCurr.value;
    input.value = res.toFixed(2);
  }
}
