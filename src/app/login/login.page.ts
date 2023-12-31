import { Component, OnInit, } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: string = '';
  pass: string = '';


  constructor(private alertController: AlertController, private router: Router,private sharedService: SharedService, private globalusuario: GlobalService) {}
  
  ngOnInit() {
  }

  guardarDatos() {
    if (this.pass.length==4 && this.user.toString().trim() !== '') {
      this.router.navigate(['/home']);
      this.sharedService.globalVariable = this.user
      console.log(this.sharedService.globalVariable.value);
      this.globalusuario.setGlobalUsuario(this.user);  //carga el usuario a la variable global
     
    } else {
      console.log('Datos inválidos. Por favor, complete el campo correctamente.');
      this.mostrarAlerta();
    }
  }

  recupera(){
    this.router.navigate(['/home']);
  }


  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Datos inválidos. Usuario o contraseña Incorrecta.',
      buttons: ['OK']
    });

    await alert.present();

  }


  
  

//  // Función de validación personalizada
//  soloNumerosValidator(control: AbstractControl): ValidationErrors | null {
//   const soloNumeros = /^[0-9]+$/;
//   if (!control.value || soloNumeros.test(control.value)) {
//     return null; // El valor es válido
//   } else {
//     return { soloNumeros: true }; // El valor no es un número
//   }
// }


}
