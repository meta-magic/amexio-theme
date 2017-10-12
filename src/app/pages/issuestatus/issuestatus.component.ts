/**
 * Created by sagar on 2/8/17.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'issue-status',
  templateUrl: 'issuestatus.html',
  styles:[`
    /*CAROUSEL - DIV HTML*/
    .amexio-carousel-backgound{
      background: #f5f5f5;padding: 10px;
    }
  `]
})

export class IssueStatusComponent implements OnInit {

  openIssuedata:any;
  constructor() {
    this.openIssuedata={
      response:{
        data:[{
          issueId:1,
          issueName:'Bug with .share operator?',
          checked:false
        },{
          issueId:2,
          issueName:"e.preventDefault broken in ie8",
          checked:false
        },{
          issueId:1,
          issueName:'Third groupBy argument (key serializer) ignored',
          checked:false
        }
        ]}};
  }
  onRowSelect(event:any){

  }
  onRowClick(event:any){

  }
  ngOnInit() { }
}
