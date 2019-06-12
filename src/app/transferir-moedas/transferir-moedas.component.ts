import {Component, OnInit} from '@angular/core';
import {Pessoa} from "../pessoa/class/Pessoa";
import {Transferencia} from "../classes/Tranferencia";
import {PessoaService} from "../pessoa/service/pessoa.service";
import {TransferenciaService} from "../transferencia.service";
import {SessionStorageService} from "ngx-webstorage";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {MatSnackBar}from '@angular/material'
import{Router} from "@angular/router";
import {LoginserviceService} from "../login/loginservice.service";

@Component({
    selector: 'app-transferir-moedas',
    templateUrl: './transferir-moedas.component.html',
    styleUrls: ['./transferir-moedas.component.css']
})
export class TransferirMoedasComponent implements OnInit {

    private pessoas: Pessoa[];
    private formtransf: FormGroup;
    private transferencia: Transferencia;


    constructor(private servicePessoa: PessoaService,
                private servicetrasnferencia: TransferenciaService,
                private formBuilder: FormBuilder,
                private storage: SessionStorageService,
                private snackBar: MatSnackBar,
                private router:Router,
                private loginservice: LoginserviceService) {


    }

    ngOnInit() {
        if(!this.loginservice.estaLogado()){
            this.router.navigate(["login"])
        }
        this.formtransf = this.formBuilder.group({
            recebedor: ['', Validators.required],
            dinheiro: this.formBuilder.group({
                valor: ['', Validators.required],
            }),
            menssagem: this.formBuilder.group({
                motivo: ['', Validators.required]
            })
        });
        this.getPessoas();
    }

    getPessoas(): void {
        this.servicePessoa.listaSemUsuarioLogado().subscribe(dados => {
            this.pessoas = <Pessoa[]>dados;
        });
    }

    onSubmit(): void {
        this.transferencia = new Transferencia();
        this.transferencia.recebedor = this.formtransf.value.recebedor;
        this.transferencia.doador = this.storage.retrieve("usuario").user._id;
        this.transferencia.qtdcoinstransf = this.formtransf.value.dinheiro.valor;
        this.transferencia.motivo = this.formtransf.value.menssagem.motivo;
        this.servicetrasnferencia.save(this.transferencia)
            .subscribe((data) => {
                this.snackBar.open("Transferencia conculida com sucesso!","fechar",{duration : 3000});
                this.router.navigate(['perfilpessoa'])
            }, (err) => {
                this.snackBar.open(err.message,"fechar",{duration: 3000});
            });
    }
}
