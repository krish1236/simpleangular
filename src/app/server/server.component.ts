import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
    id= 5;
    status = 'Ofline';
    addNewServer = false;
    serverName ='test';
    serverStatus = "no server was created ";

    getStatus(){
      return this.status; 
    }
  constructor() { 
    setTimeout(()=>{this.addNewServer=true;},5000);

  }

  onCreateServer(){
    this.serverStatus = 'the server ' + this.serverName + ' is created '  ;
  }
  
  ngOnInit() {
  }

}
