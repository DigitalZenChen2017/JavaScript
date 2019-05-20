import { Component, OnInit } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-servers',
  /* templateUrl: './servers.component.html',*/
  template: `
  <app-server></app-server>
  <app-server></app-server>
  `, /*template is REQUIRED!*/
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
