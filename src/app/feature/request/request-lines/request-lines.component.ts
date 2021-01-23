import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  requestTitle = "Purchase Request Line Items";
  linesTitle = "Lines";
  request: Request = null;
  lineItems: LineItem[] = [];
  isHidden = false;
  requestId = 0;

  constructor(private lineItemSvc: LineItemService,
              private requestSvc: RequestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // get the id from the url
    this.route.params.subscribe(
      parms => {
        this.requestId = parms['id'];
      });

    // get the request by the request id
    this.requestSvc.getById(this.requestId).subscribe(
      resp => {
        this.request = resp as Request;
      },
      err => {
        console.log(err);
      }
    )

    // get the line items by request id
    this.lineItemSvc.getLineItemsByRequestId(this.requestId).subscribe(
      resp => {
        this.lineItems = resp as LineItem[];
        if(this.lineItems.length === 0) {
          this.isHidden = true;
        }
      },
      err => {
        console.log(err);
      }
    )
  }

}