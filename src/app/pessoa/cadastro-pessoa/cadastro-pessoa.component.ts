import { Component, OnInit } from '@angular/core';
import { Pessoa} from "../class/Pessoa";
import { Login} from "../class/Login";
import { PessoaService } from "../service/pessoa.service";
import { formCadastroPessoa } from '../Forms/formCadatroPessoa';
import { FormControl } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  private formpessoa =  formCadastroPessoa;
  public pessoa : Pessoa ;
  constructor(private service:PessoaService, private snackbar:MatSnackBar, private router: Router) {


  }

  ngOnInit() {
  }

  cadastrar():void{
    if(this.formpessoa.valid){
      let login = new Login();
      this.pessoa = new Pessoa(login);
      this.pessoa.nome = this.formpessoa.value.nome;
      this.pessoa.qtdcoinstransf = 100;
      this.pessoa.qtdcoins = 0;
      this.pessoa.login.email = this.formpessoa.value.email;
      this.pessoa.login.senha = this.formpessoa.value.senha;
      this.service.save(this.pessoa).
      subscribe((data)=>{
          alert(data.status);
          this.snackbar.open("Usuario cadastrado com sucesso!", 'fechar',{duration: 3000});
          this.router.navigate(['login']);
      },(error) =>{
          if(error.status == 500){
              this.snackbar.open("email já cadastrado!", 'fechar',{duration: 3000});
          }
      });

    }

  }

    getErrorMessage(controls: FormControl) {

        return controls.hasError('required') ? 'Ocampo é obrigatório' :
            controls.hasError('email') ? 'Isso não é um email' :
                controls.hasError('minlength') ? 'O campo deve conter pelo menos 8 caracteres' :
                    controls.hasError('confirmaSenha') ? 'As senhas devem ser iguais ' :
                    '';

    }
}
