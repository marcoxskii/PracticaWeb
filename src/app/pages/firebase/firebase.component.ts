import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../../Domain/message';
import { MessageService } from '../../Services/message.service';

@Component({
  selector: 'app-firebase',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './firebase.component.html',
  styleUrl: './firebase.component.scss'
})
export class FirebaseComponent {
  mensaje: Message = new Message()
  message : any

  constructor(private messagesService : MessageService){
  }
  

  ngOnInit(){
    this.messagesService.getMessage().then(data => {

      this.message = data.docs.map((doc:any) => {
        console.log(doc.id)
        console.log(doc.data())
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      
      console.log('msgs', this.mensaje)
    })
  }

  guardar(){
    this.messagesService.addMessage(this.mensaje)
    console.log('Mensaje Enviado');
  }

  mostrar(){
    console.log(this.message);
  }

}
