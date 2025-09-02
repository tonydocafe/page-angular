import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { enviroment } from '../../environments/enviroment';

import type { IComment } from '../comment';

import { Response } from 'express';




@Injectable({
  providedIn: 'root'
})
export class CommentService {
   private baseApiUrl = enviroment.baseApiUrl

  
   private apiUrl =`${this.baseApiUrl}/moments`
   
   


  constructor(private http:HttpClient) { }
  
  createComment(data: IComment):Observable<IComment>{
    const url = `${this.apiUrl}/${data.momentId}/comments`;

    return this.http.post<IComment>(url, data)  
   }


}
