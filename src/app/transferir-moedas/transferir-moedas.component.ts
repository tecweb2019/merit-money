import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../pessoa/class/Pessoa";
import {Transferencia} from "../classes/Tranferencia";
import {PessoaService} from "../pessoa/service/pessoa.service";
import {TransferenciaService} from "../transferencia.service";

import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-transferir-moedas',
  templateUrl: './transferir-moedas.component.html',
  styleUrls: ['./transferir-moedas.component.css']
})
export class TransferirMoedasComponent implements OnInit {

  private pessoas: Pessoa[];
  private primeiroForm :FormGroup;
  private segundoForm:FormGroup;
  private terceiroForm: FormGroup;
  private transferencia : Transferencia;


  constructor(private servicePessoa:PessoaService,
              private servicetrasnferencia: TransferenciaService,
              private formBuilder:FormBuilder) {


  }

  ngOnInit() {
      this.primeiroForm = this.formBuilder.group({
          recebedor: ['', Validators.required]
      });
      this.segundoForm = this.formBuilder.group({
          valor: ['', Validators.required]
      });
      this.terceiroForm = this.formBuilder.group({
          motivo: ['', Validators.required]
      });
  this.getPessoas();
  }

  onSubmit(){

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
