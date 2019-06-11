import { Component, OnInit } from '@angular/core';

import { RecompensasService } from "../recompensas.service";
import { Recompensas } from '../classes/Recompensas';

@Component({
  selector: 'app-recompensas',
  templateUrl: './recompensas.component.html',
  styleUrls: ['./recompensas.component.css']
})
export class RecompensasComponent implements OnInit {

  private recompensas: Recompensas;
  constructor(private recompensasService: RecompensasService) { }



  ngOnInit() {

    // var teste = new MinhasTransferencias;
    // teste.destinatario = "Larissa";
    // teste.motivo = "Teste motivo transferencia";
    // teste.quantidade = 50;
    // teste.remetente = "Lulu";

    // this.minhasTransferencias.push(teste); 

    // this.getTransferencias();
  }

}

