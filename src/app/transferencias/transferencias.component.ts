import { Component, OnInit } from '@angular/core';
import { Transferencia} from "../classes/Tranferencia";
import { TransferenciaService} from "../transferencia.service";

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.component.html',
  styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent implements OnInit {

  private transferencias : Transferencia[];
  constructor(private service: TransferenciaService) { }

  ngOnInit() {
    this.getTransferencias();
  }

  getTransferencias(): void{
    this.service.listar().subscribe(data =>{
      this.transferencias = <Transferencia[]> data;
    });
  }
}
