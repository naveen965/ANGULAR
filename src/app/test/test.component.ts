import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{name}}
    </h2>
    <input [id]="myId" type="text" value="Naveen">
    <input disabled = "{{false}}" id="{{myId}}" type="text" value="Naveen">
    <input [disabled] = "false" id="{{myId}}" type="text" value="Devinda">
    <input bind-disabled = "isDisabled" id="{{myId}}" type="text" value="Rajasekara">
  `,
  styles: [`
    div {
      color: green;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = 'Naveen';
  public myId = 'testId';
  public isDisabled = false;
  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return 'Hello ' + this.name;
  }

}
