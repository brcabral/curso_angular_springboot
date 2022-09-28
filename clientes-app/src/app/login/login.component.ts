import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  loginError: boolean;
  cadastrar: boolean;

  constructor(
    private router: Router
  ) { }

  onSubmit() {
    this.router.navigate(['/home']);
  }

  prepararCadastro(event) {
    event.preventDefault();
    this.cadastrar = true;
  }

  cancelarCadastro() {
    this.cadastrar = false;
  }
}
