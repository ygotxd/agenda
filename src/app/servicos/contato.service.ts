import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

export interface Contato{
  id?: string;
  nome: string;
  email: string;
  telefone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  colecao: string = "contato";
  constructor(private firestore: Firestore) { }

  cadastrar(obj: any) {
    const contatos = collection(this.firestore, this.colecao);
    return addDoc(contatos, obj);
  }  

  listar(){
    const contatos = collection(this.firestore, this.colecao);

  }

}


