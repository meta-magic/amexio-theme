import {Injectable} from "@angular/core";
import {CookieService} from 'ngx-cookie-service';
/**
 * Created by sagar on 30/8/17.
 */
@Injectable()
export class ThemeService {
  themeName: string;
  iconArray: any[] = [];

  constructor(private cookieService: CookieService) {
  }

  setThemeName(themeName: string) {
    this.themeName = themeName;
    this.cookieService.set('theme_name', this.themeName);
    if (this.themeName == "Default") {
      this.iconArray = [{
        'iconId': 1, 'iconsArray': [{
          'iconClass': 'fa fa-phone', 'iconName': ''
        }, {
          'iconClass': 'fa fa-map-marker', 'iconName': ''
        }, {
          'iconClass': 'fa fa-birthday-cake', 'iconName': ''
        }]
      }, {
        'iconId': 2
      }]
    } else if (this.themeName == "MDB") {
      this.iconArray = [{
        'iconId': 1, 'iconsArray': [{
          'iconClass': 'material-icons md-dark', 'iconName': 'phone'
        }, {
          'iconClass': 'material-icons md-dark', 'iconName': 'location_on'
        }, {
          'iconClass': 'material-icons md-dark', 'iconName': 'cake'
        }]
      }, {
        'iconId': 2
      }]
    }
  }

  getCurrentUsageThemeName() {
    if (this.cookieService.get('theme_name')) {
      return this.cookieService.get('theme_name');
    }
  }

  setThemeCSSFileName(fileName:string){
    this.cookieService.set('CssFileName',fileName);
  }
  getThemeCSSFileName(){
    if(this.cookieService.get('CssFileName')){
      return this.cookieService.get('CssFileName');
    }
  }
}
