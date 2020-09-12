import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverStatus: String = "offline";
  serverId = 5;

  constructor() { }

  ngOnInit(): void {
  }

  getServerStatus() {
    return this.serverStatus;
  }

}
