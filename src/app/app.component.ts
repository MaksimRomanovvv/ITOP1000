import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  USD = 30;
 
  EUR = 40;


  ngOnInit() {

    fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.USD = data[0].buy;
        this.EUR = data[1].buy;
      });
  }
}
