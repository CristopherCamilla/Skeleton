import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { GlobalService } from '../global.service';
import { OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AnimationController, Animation } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usu: any;
  fechaNacimiento: string = '';

  constructor(private animationCtrl: AnimationController, private sharedService: SharedService, private globalusuario: GlobalService ) {
    this.getGlobalusu(),this.animateHeader()
  }


  getGlobalusu(){
    this.usu = this.globalusuario.getGlobalUsuario();
   
  //const valor = this.sharedService.globalVariable;

  //console.log('Valor de globalVariable en OtraHoja:', valor);

  // Variable para almacenar la fecha de nacimiento

}

animateHeader() {
  const h1Element = document.querySelector('h3');

  if (h1Element) {
    const fadeAnimation: Animation = this.animationCtrl.create()
      .addElement(h1Element)
      .duration(3000)
      .fromTo('opacity', 1, 0);

    fadeAnimation.play();
  }
}


}