import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {
  title = "Request Edit";
  submitBtnTitle = "Save";
  requestId: number = 0;
  request: Request = new Request();

  constructor(private requestSvc: RequestService,
              private sysSvc: SystemService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.request.user = this.sysSvc.loggedInUser;

    // get id from url
    this.route.params.subscribe(
      parms => { this.requestId = parms['id']; });

    // get the request id
    this.requestSvc.getById(this.requestId).subscribe(
      resp => {
        this.request = resp as Request;
      },
      err => {
        console.log(err);
      }
    );
  }

  save() {
    // save the request to the database
    this.requestSvc.create(this.request).subscribe(
      resp => {
        this.request = resp as Request;
        // forward to the request list component
        this.router.navigateByUrl("/request-list");
      },
      err => {
        console.log(err);
      }
    )
  }

}