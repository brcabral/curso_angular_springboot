import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContatoService } from '../contato.service';
import { Contato } from './contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  formulario : FormGroup;

  constructor(
    private service: ContatoService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email] ]
    });
  }

  submit() {
    const errorNomeRequired = this.formulario.controls.nome.errors.required;
    const errorEmailRequired = this.formulario.controls.email.errors.required;
    const errorEmailInvalido = this.formulario.controls.email.errors.email;
    
    console.log('errorNomeRequired: ', errorNomeRequired);
    console.log('errorEmailRequired: ', errorEmailRequired);
    console.log('errorEmailInvalido: ', errorEmailInvalido);

    console.log(this.formulario.value);
    const isValid = this.formulario.valid;
    console.log('is valid: ', isValid);

    //this.service.save(contato).subscribe(resposta => {
    //  console.log(resposta);
    //});
  }
}
