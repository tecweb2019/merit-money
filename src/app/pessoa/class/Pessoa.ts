
import { Login} from "./Login";

export  class Pessoa {
    public id: string;
    public nome: string;
    public qtdcoinstransf: number;
    public qtdcoins: number;
    public login: Login;

    constructor(login :Login){
        this.login = login;
    }
}