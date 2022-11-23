import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: '[app-home, show-hide-container]',
  templateUrl: 'login.html',
  styleUrls: ['login.scss'],
})


export class HomePage {

  login:String="";
  senha:String="";

  logado="";
  erro="";
  
  private api="http://localhost/api/";

  constructor(private http:HttpClient, private router:Router) { }

logar(){
  this.http.get<any[]>(this.api+"logar.php?login="+this.login+"&senha="+this.senha)
        .subscribe(dados => {
               if(dados.length>0){
                 this.logado=dados[0].nome;
                 this.router.navigate(['/home-page'])
                } else {
                  this.erro = "Usuário ou senha inválidos!"
                }     
               console.log(dados);        
        })
}

}

