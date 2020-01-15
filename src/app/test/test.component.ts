import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <input [(ngModel)] = "name" type="text">
    {{name}}
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = '';
  // public greeting = '';
  // public hasError = false;
  // public isSpecial = true;
  // public highlichtColor = "orange";
  // public titleStyles = {
  //   color: "blue",
  //   fontStyle: "italic"
  // }

  constructor() { }

  ngOnInit() {
  }

  logMessage(value) {
    console.log(value);
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

  onClick(event) {
    console.log(event);
    this.greeting = event.type;
  }

}
