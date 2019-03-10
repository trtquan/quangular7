import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html'
})

export class ServerComponent {
  private serverID = 10;
  serverStatus() {
    return Math.floor(Math.random() * 10) < 5 ? 'error' : 'success';
  }
}
