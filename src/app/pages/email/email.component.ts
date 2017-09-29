/**
 * Created by sagar on 2/8/17.
 */

import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../../theme.service";

@Component({
  selector: 'email',
  templateUrl: 'email.html'
})

export class EmailComponent implements OnInit {
  isComposeOpen : boolean;
  bindData : any;
  data:any;
  isVisible:boolean;
  constructor(private themeService:ThemeService) {
    this.isComposeOpen=false;
    this.bindData ={
      "response": {
        "success": true,
        "message": "Fetching  Data  Request Succeeded: Profile",
        "data": [
          {
            "name": "Ketan Gote",
            "name_official": "Ketan Gote",
            "profile": "ketan.jpg"
          },
          {
            "name": "Pratik Kelwalkar",
            "name_official": "Pratik Kelwalkar",
            "profile": "pratik.jpg"
          },
          {
            "name": "Dattaram Gawas",
            "name_official": "Dattaram Gawas",
            "profile": "dats.jpg"
          },
          {
            "name": "Sagar Jadhav",
            "name_official": "Sagar Jadhav",
            "profile": "sagar.jpg"
          },
          {
            "name": "Mahesh Pardeshi",
            "name_official": "Mahesh Pardeshi",
            "profile": "mahesh.jpg"
          },
          {
            "name": "Ashutosh Jadhav",
            "name_official": "Ashutosh Jadhav",
            "profile": "ahutosh.jpg"
          }
        ]
      }
    };
    this.isVisible=false;

  }
  onRowSelect(event:any){
    if(event.length>0){
      this.isVisible=true;
    }else{
      this.isVisible=false;
    }

  }
  onRowClick(event:any){

  }
  toggle(){
    this.isComposeOpen = !this.isComposeOpen;
  }
  ngOnInit() {
    if(this.themeService.themeName=="Default"){
      this.data=[
        {
          "text": "Inbox",
          "expanded":false,
          "checked": false,
          "selected":true,
          "icon": "fa fa-inbox"
        },{
          "text": "Sent",
          "expanded": false,
          "checked": false,
          "icon": "fa fa-envelope-o"
        },{
          "text": "Trash",
          "expanded": false,
          "checked": false,
          "icon": "fa fa-trash-o"
        },
        {
          "text": "Labels",
          "expanded": false,
          "checked": false,
          "icon": "fa fa-tag",
          "children": [
            {
              "text": "High",
              "expanded": false,
              "checked": false,
              "icon": "fa fa-tag fa-lg"
            },{
              "text": "Medium",
              "expanded": false,
              "checked": false,
              "icon": "fa fa-tag fa-md"
            },{
              "text": "Low",
              "expanded": false,
              "checked": false,
              "icon": "fa fa-tag "
            }
          ]
        }
      ]
    }else if(this.themeService.themeName=="MDB"){
      this.data=[
        {
          "text": "Inbox",
          "expanded":false,
          "checked": false,
          "selected":true,
          "materialIcon":"dashboard"
        },{
        "text": "Sent",
        "expanded": false,
        "checked": false,
        "materialIcon":"email"
      },{
        "text": "Trash",
        "expanded": false,
        "checked": false,
        "materialIcon":"delete"
      },
        {
          "text": "Labels",
          "expanded": false,
          "checked": false,
          "materialIcon":"label",
          "children": [
            {
              "text": "High",
              "expanded": false,
              "checked": false,
              "materialIcon":"label"
            },{
              "text": "Medium",
              "expanded": false,
              "checked": false,
              "materialIcon":"label"
            },{
              "text": "Low",
              "expanded": false,
              "checked": false,
              "materialIcon":"label"
            }
          ]
        }
      ]
    }
  }
}
