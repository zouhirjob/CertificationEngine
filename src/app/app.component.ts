import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngModel = null;

  ngOnInit() {}

  matDatepickerFilter = (date: Date): boolean => {
    console.log('filter');
    return true;
  };
}
