import { Component } from '@angular/core';
import { MomentService } from '../../../services/moment.service';
import { Moment} from '../../../moment';

import { enviroment } from '../../../../environments/enviroment';

import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@Component({
  selector: 'app-home',
  imports: [NgFor,NgIf,RouterLink,FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

allMoments: Moment[] = []
moments: Moment[] = []

baseApiUrl = enviroment.baseApiUrl

faSearch =  faSearch;
searchTerm: string = "";

constructor(private momentService: MomentService){}

ngOnInit():void{
  this.momentService.getMoments().subscribe((items) =>{
    
    
    const data = items.data

    data.map((item)=>{
      item.createdAt = new Date(item.createdAt!).toLocaleDateString('pt-BR');
    });

    this.allMoments = data
    this.moments = data


  });
}

search(e: Event): void {
  const target = e.target as HTMLInputElement;
  const value = target.value.toLowerCase();

  this.moments = this.allMoments.filter(moment =>{ 
    return moment.title.toLowerCase().includes(value) // retorna true/false
  });
}
}
