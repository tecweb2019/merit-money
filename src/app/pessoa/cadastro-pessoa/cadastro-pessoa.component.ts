import { Component, OnInit } from '@angular/core';
import { Pessoa} from "../class/Pessoa";
import { PessoaService } from "../service/pessoa.service";
import { formCadastroPessoa } from '../Forms/formCadatroPessoa';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-cadastro-pessoa',
  templateUrl: './cadastro-pessoa.component.html',
  styleUrls: ['./cadastro-pessoa.component.css']
})
export class CadastroPessoaComponent implements OnInit {

  private formpessoa =  formCadastroPessoa;
  public pessoa : Pessoa;
  constructor(private service:PessoaService) {


  }

  ngOnInit() {
  }

  onSubmit():void{
    alert("estou aqui");
    if(this.formpessoa.valid){
      this.pessoa.nome = this.formpessoa.value.nome;
      this.pessoa.login.email = this.formpessoa.value.email;
      this.pessoa.login.senha = this.formpessoa.value.senha;
      this.pessoa.qtdcoinstransf = 100;
      this.pessoa.qtdcoins = 0;
      this.service.save(this.pessoa);
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
