import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../classes/Pessoa";
import {Transferencia} from "../classes/Tranferencia";
import {PessoaService} from "../pessoa.service";
import {TransferenciaService} from "../transferencia.service";

import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-cadastro-transferencia',
  templateUrl: './cadastro-transferencia.component.html',
  styleUrls: ['./cadastro-transferencia.component.css']
})
export class CadastroTransferenciaComponent implements OnInit {

  private pessoas: Pessoa[];
  private formTransf =  new FormGroup({
      recebedor : new FormControl(''),
      motivo : new FormControl(''),
      valor : new FormControl(''),
  });
  private transferencia;


  constructor(private servicePessoa:PessoaService, private servicetrasnferencia: TransferenciaService) { }

  ngOnInit() {
  this.getPessoas();
  }

  onSubmit(){
    this.transferencia  = new Transferencia();
    this.transferencia.doador = "5ce831a9846e9f173b62507c";
    this.transferencia.qtdcoinstransf = this.formTransf.value.valor;
    this.transferencia.motivo = this.formTransf.value.motivo;
    this.transferencia.recebedor = this.formTransf.value.recebedor;
    this.cadastrar();
    alert(this.transferencia.recebedor);
  }
  getPessoas():void {
      this.servicePessoa.getAll().subscribe(dados=>{
        this.pessoas = <Pessoa[]>dados;
      });

  }

  cadastrar():void{
    this.servicetrasnferencia.save(this.transferencia);
  }
}
