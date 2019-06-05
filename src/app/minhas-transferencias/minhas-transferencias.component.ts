import { Component, OnInit } from '@angular/core';

import { Transferencia} from "../classes/Tranferencia";
import { MinhasTransferenciasService} from "../minhas-transferencias.service";
import { MinhasTransferencias } from '../classes/MinhasTransferencias';

@Component({
  selector: 'app-minhas-transferencias',
  templateUrl: './minhas-transferencias.component.html',
  styleUrls: ['./minhas-transferencias.component.css']
})
export class MinhasTransferenciasComponent implements OnInit {

  private minhasTransferencias : MinhasTransferencias[];
  constructor(private minhasTransFerenciasService: MinhasTransferenciasService) { }

  ngOnInit() {
    this.getTransferencias();
  }

  getTransferencias(): void{
    this.minhasTransFerenciasService.minhasTransferencias("5ce831a9846e9f173b62507c").subscribe(data =>{
      this.minhasTransferencias = <MinhasTransferencias[]> data;
    });
  }
}
