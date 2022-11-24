import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  //propriedades
  inputDados:string = "";
  nomeCompleto = "";
  email = "";
  cpf = "";
  dataNascimento = "";
  senha = "";

  //métodos

  registrar() {
    
  }

  ngOnInit() {
  }

}
