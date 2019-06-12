import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../class/Pessoa";
import {PessoaService} from "../service/pessoa.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SessionStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-detais-pessoa',
  templateUrl: './detais-pessoa.component.html',
  styleUrls: ['./detais-pessoa.component.css']
})
export class DetaisPessoaComponent implements OnInit {

  public pessoa: Pessoa;
  constructor( private service:PessoaService,
               private route: ActivatedRoute,
               private router: Router,
               private storage: SessionStorageService,
               ) { }

  ngOnInit() {
      debugger
      let id = this.storage.retrieve("usuario").user._id;
    this.getPessoa(id);
  }

  getPessoa(id): void{
     this.service.getForId(id)
         .subscribe( data =>{
            this.pessoa =<Pessoa> data;
     });
  }
}
