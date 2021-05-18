import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent  {
  allowNewServer = false;
  serverCreationStatus = 'No server was created !!';
  serverName;
  userName = '';
  serverCreated = false;
  servers = ['Server 1', 'Server 2', 'Server 3'];

  constructor() {
    setTimeout(() => {this.allowNewServer = true}, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = `Server created: ${this.serverName}`;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value
  }

  onResetUserName() {
    this.userName = '';
  }

}
