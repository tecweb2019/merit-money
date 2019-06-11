
import { Login} from "./Login";

export  class Pessoa {
    _id: string;
    nome: string;
    qtdcoinstransf:number;
    qtdcoins: number;
    login: Login;
    constructor(login :Login){
        this.login = login;
    }
}