import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent  {
  allowNewServer = false;
  serverCreationStatus = 'No server was created !!';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {this.allowNewServer = true}, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server created !!';
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value
  }

}
