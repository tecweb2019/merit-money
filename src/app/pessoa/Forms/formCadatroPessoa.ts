import { FormControl, FormGroup, Validators, ValidationErrors,ValidatorFn } from "@angular/forms";
import {validate} from "codelyzer/walkerFactory/walkerFn";

/*export const confirmaSenha : ValidatorFn = (control: FormGroup): ValidationErrors | null => {
   if(!(control === null)){
    const senha = control.get('senha').value;
    const confirmasenha = control.get('confirmaSenha').value;

    return senha !== confirmasenha ? {confirmaSenha : "Senhas tem que ser iguais "} : null
   }
};*/
export let formCadastroPessoa = new FormGroup({
    nome: new FormControl('',[Validators.required ]),
    email: new FormControl('',[Validators.required , Validators.email]),
    senha: new FormControl('', [Validators.required , Validators.minLength(8)]),
    confirmaSenha: new FormControl('',[Validators.required ])
});

