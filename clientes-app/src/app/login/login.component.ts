import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

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
  mensagemSucesso: string;

  constructor(
    private router: Router,
    private authService: AuthService
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

  cadastrarUsuario() {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService.salvar(usuario).subscribe(response => {
      this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login.";
      this.loginError = false;
    }, error => {
      this.loginError = true;
      this.mensagemSucesso = null;
    });
  }
}
