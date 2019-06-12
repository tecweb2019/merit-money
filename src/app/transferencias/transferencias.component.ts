import {Component, OnInit} from '@angular/core';
import {Transferencia} from "../classes/Tranferencia";
import {TransferenciaService} from "../transferencia.service";

@Component({
    selector: 'app-transferencias',
    templateUrl: './transferencias.component.html',
    styleUrls: ['./transferencias.component.css']
})
export class TransferenciasComponent implements OnInit {

    private transferencias: Transferencia[];

    constructor(private service: TransferenciaService) {
    }

    ngOnInit() {
        this.getTransferencias();
    }

    getTransferencias(): void {
        this.service.getTransferenciasEnvolvido()
            .subscribe(data => {
                this.transferencias = data;
            });
    }

    getTrasferenciasfeitas(): void {
        this.service.getTransferenciasFeirtas()
            .subscribe(data => {
                this.transferencias = data;
            })
    }

    getTranferenciasRecebidas(): void {
        this.service.getTransferenciasRecebidas()
            .subscribe(data => {
                this.transferencias = data;
            })
    }
}
