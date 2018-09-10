import { Observable } from 'rxjs/Observable';
import {Response} from '@angular/http';

import 'rxjs/add/observable/throw';

export class HandlerErro{
    static erroHandler(erro: Response | any){
        let erroMessage: string
        if(erro instanceof Response)
        {
            erroMessage =`Erro ${erro.status} ao acessar a bosta da pagina angular ${erro.statusText}`
        }
        else{
            erroMessage = erro.toString();
        }
        console.log(erroMessage)
        return Observable.throw(erroMessage)
    }
}