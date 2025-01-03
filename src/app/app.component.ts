import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  email: string | null = null;
  menuCtrl: any;
  constructor(private menu: MenuController, private router: Router, private afAuth: AngularFireAuth) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.email = user.email; 
      } else {
        this.email = null; 
      }
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
  closeMenu() {
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement) {
        activeElement.blur(); // Retira el foco del elemento activo
    }
    this.menuCtrl.close(); // Cierra el menú
}
}
