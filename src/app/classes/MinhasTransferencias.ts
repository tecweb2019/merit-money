export  class MinhasTransferencias {

    public id: string;
    public remetente: string;
    public destinatario : string;
    public quantidade : number;
    public motivo : string;
    constructor(){
        this.remetente = "Teste";
        this.destinatario = "Destinatario";
        this.quantidade = 10;
        this.motivo = "Motivo";
    }


}