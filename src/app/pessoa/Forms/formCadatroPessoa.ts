import { FormControl, FormGroup } from "@angular/forms";

export let formCadastroPessoa = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    senha: new FormControl(),
    confirmaSenha: new FormControl(),
});