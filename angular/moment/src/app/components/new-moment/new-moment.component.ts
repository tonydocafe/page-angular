import { Component } from '@angular/core';
import { MomentFormComponent } from '../moment-form/moment-form.component';
import { Moment } from '../../moment';

import { Router } from '@angular/router';
import { MomentService } from '../../services/moment.service';
import { MessagesService } from '../../services/messages.service';


@Component({
  selector: 'app-new-moment',
  imports: [MomentFormComponent],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
 
  constructor( private momentService: MomentService, private messageService: MessagesService, private router: Router){}
 
  async createHandler(moment: Moment){
    const formData = new FormData()

    formData.append("title",moment.title)
    formData.append("description",moment.description)

    if (moment.image){
      
      formData.append('image',moment.image);

    }
    await this.momentService.createMoment(formData).subscribe();
    this.messageService.add("Momento adcionado com sucesso!");
  
    this.router.navigate(['/']);
  }
  
  btnText = 'Compartilhar';


}
