import { Injectable } from '@angular/core';
import { Message } from '../Domain/message';
import { CollectionReference, Firestore, addDoc, getDocs, query, collection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private firestore : Firestore) { }

  addMessage(message : Message){
    addDoc(collection(this.firestore, 'messages'), Object.assign({}, message))
  }

  getMessage(){
    return getDocs(query(collection(this.firestore, 'messages')))
  }
}
