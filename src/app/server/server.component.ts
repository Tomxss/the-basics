import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online {
    color: white;
  }  
  `]
})
export class ServerComponent implements OnInit {
  serverStatus: String = "offline";
  serverId = 404;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
   }

  ngOnInit(): void {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
