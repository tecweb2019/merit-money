import { Component, OnInit } from '@angular/core';
import { Pessoa} from "../class/Pessoa";
import { PessoaService } from "../service/pessoa.service";
import { formCadastroPessoa } from '../Forms/formCadatroPessoa';
import { MaterialImportsModule} from "../../material-imports/material-imports.module";

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

  cadastrar():void{
    this.pessoa.qtdcoins = 0;
    this.pessoa.qtdcoinstransf = 100;
    this.service.save(this.pessoa);
  }
}
