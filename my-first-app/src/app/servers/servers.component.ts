import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  // styleUrls: ['./servers.component.css']
  styles: [`
      p {
        color: green
      }
    `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
