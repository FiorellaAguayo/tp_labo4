import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    // Aquí va la lógica para el login cuando se implemente la autenticación
    console.log('Correo:', this.email);
    console.log('Clave:', this.password);
  }

  close() {
    // Lógica para cerrar el modal
    console.log('Modal cerrado');
  }
}
