import {UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {NavController} from '@ionic/angular';
import {PasswordService} from './password.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private readonly passwordService: PasswordService,
              private readonly navCtrl: NavController) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.passwordService.isLoggedIn()) {
      this.navCtrl.navigateRoot('/login', {replaceUrl: true});
      return false;
    }
    return true;
  }

}
