import { Component } from '@angular/core';

import { MomentService } from '../../../services/moment.service';

import { Moment } from '../../../moment';

import { MessagesService } from '../../../services/messages.service';

import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { enviroment } from '../../../../environments/enviroment';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

import { Router } from '@angular/router';

import { RouterLink } from '@angular/router';

import { IComment } from '../../../comment';

import { FormGroup, FormControl, Validators, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

import { CommentService } from '../../../services/comment.service';



@Component({
  selector: 'app-moment',
  imports: [NgIf,FontAwesomeModule,RouterLink, ReactiveFormsModule,NgFor],
  templateUrl: './moment.component.html',
  styleUrl: './moment.component.css'
})
export class MomentComponent {


  faTimes = faTimes;
  faEdit = faEdit;

  commentForm!:FormGroup;

  baseApiUrl = enviroment.baseApiUrl;

  moment?: Moment;

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router,
    private commentService: CommentService
   ) {}
 
   ngOnInit(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
   
    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data;
      if (!this.moment.comments) {
        this.moment.comments = [];
      }
    });

    
    this.commentForm = new FormGroup({ 
      text: new FormControl('',[Validators.required]),
      username: new FormControl('',[Validators.required])
    });
  }



  get text(){
    return this.commentForm.get('text')!;
  }
  get username(){
    return this.commentForm.get('username')!;
  }

  
  async onSubmit(formDirective: FormGroupDirective){
    
    if(this.commentForm.invalid){
      return
    }
    
    const data: IComment = this.commentForm.value;
    
    data.momentId = Number(this.moment!.id);
    
    this.commentService.createComment(data).subscribe({
      next: (comment: IComment) => {
        this.moment!.comments = [...this.moment!.comments!, comment];
        this.messageService.add("Comentário adicionado com sucesso!");
        this.commentForm.reset();
        formDirective.resetForm();
            // Força recarregar o componente
        const currentUrl = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentUrl]);
    });
      },
      error: (err) => {
        this.messageService.add("Erro ao adicionar comentário!");
        console.error(err);
      }
    });

  }



  async removeHandler(id:number){

    await this.momentService.removeMoment(id).subscribe()

    this.messageService.add("Momento excluido com sucesso!")

    this.router.navigate(['/']);
  
  }
}
