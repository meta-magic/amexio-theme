/**
 * Created by sagar on 4/8/17.
 */
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {ThemeService} from "./theme.service";
const CSS_LOCATION : string = 'assets/themes/';
@Component({
 selector: 'landing-page',
 templateUrl:'landingpage.html',
  styles : [
    `
      .landing-page{
        background: center no-repeat transparent;
        background-image: url("./../assets/Nighthawk.jpg");
        height: 100vh;
        color: #cccccc;
      }
    `
  ]
})


export class LandingPageComponent implements OnInit {
  httpResponse : any;

  menuData : any[] = [];
  availableThemes:any[];
 constructor( private _router : Router ,public _http : Http,private themeService:ThemeService) {
   this.availableThemes = [
     {
       'displayName':'Default Theme',
       'name' : 'Default',
       'fileName' : "styles",
       'category' : 'free',
       "childrens":[{
         'displayName':'Blue',
         'name' : 'Default',
         'fileName' : 'styles'
       }]
     },
     {
       'displayName':'Material Design Theme',
       'name' : 'MDB',
       'fileName' : 'styles-bluegrey',
       'category' : 'free',
       "childrens":[{
         'displayName':'Bluegrey',
         'name' : 'MDB',
         'fileName' : 'styles-bluegrey'
       }]
     }
   ]
   this._http.get('assets/data/menus/hometopmenu.json').subscribe(
     response=>{
       this.httpResponse = response.json()
     },
     error=>{
       //prompt on error
     },
     ()=>{
       this.menuData = this.httpResponse.menus;
     }
   );
 }
  routeDemo(event:any){
    this._router.navigate(['/home/dashboard']);
  }
  //set theme which user has selected
  setTheme(themeName : any){
    //set Theme name to singleton ThemeService
    this.themeService.setThemeName(themeName.name);
    let currentTheme = document.head.querySelectorAll(`link[rel="stylesheet"]`);
    this.removeExistingTheme(currentTheme);
    if(themeName.fileName!=null)
      this.createAndApplyNewTheme(themeName);
      this._router.navigate(['/home/dashboard']);
  }

  //removed old theme css
  removeExistingTheme(keyList : any){
    if(keyList!=null && keyList && keyList.length!=0){
      keyList.forEach(
        (key)=>{
          if(key.id=='custom_theme')
          document.head.removeChild(key);
        }
      );

    }

  }

  //apply theme based on use selection
  createAndApplyNewTheme(theme : any){

    if(theme.name==="MDB"){
      //this is for MDB theme
      let linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'stylesheet');
      linkEl.id='custom_theme';
      linkEl.href = CSS_LOCATION+'/'+theme.fileName+'.css';
      document.head.appendChild(linkEl);

      //add material +family=Roboto api
      let font1 = document.createElement('link');
      font1.setAttribute('rel', 'stylesheet');
      font1.id='custom_theme';
      font1.href = "https://fonts.googleapis.com/css?family=Roboto:400,500,700;";
      document.head.appendChild(font1);

      let font2 = document.createElement('link');
      font2.setAttribute('rel', 'stylesheet');
      font2.id='custom_theme';
      font2.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
      document.head.appendChild(font2);
    }else{
      //this is for default theme
      let linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'stylesheet');
      linkEl.id='custom_theme';
      linkEl.href = CSS_LOCATION+'/'+theme.fileName+'.css';
      document.head.appendChild(linkEl);
    }

  }
 ngOnInit() {
 }

}
