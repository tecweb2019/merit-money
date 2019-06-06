import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../class/Pessoa";
import {PessoaService} from "../service/pessoa.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

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
               ) { }

  ngOnInit() {
    this.getPessoa("5ce831a9846e9f173b62507c");
  }

  getPessoa(id): void{
     this.service.getForId(id).subscribe( data =>{
       this.pessoa =<Pessoa> data;
     });
  }
}
