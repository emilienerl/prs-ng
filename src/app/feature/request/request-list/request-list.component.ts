import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  title = "Request List";
  requests: Request[] = [];

  constructor(private requestSvc: RequestService,
              private sysSvc: SystemService) { }

  ngOnInit(): void {
    // if coming from login we should have an authenticated user inside sysSvc
    console.log("user list - loggedInUser?", this.sysSvc.loggedInUser);
    // populate list of requests
    this.requestSvc.getAll().subscribe(
      resp => {
        this.requests = resp as Request[];
      },
      err => {
        console.log(err);
      }
    )
  }

}