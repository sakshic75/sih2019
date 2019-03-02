import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import "rxjs/"
import {Todo} from "./Todo";


@Injectable({
  providedIn: 'root'

})
export class TodoService {
  apiURL: string = 'http://localhost:4200';
  todo:Object;

  constructor(private httpClient: HttpClient) {}

  
  getAllTodos()

  {
    
    return this.httpClient.get("http://localhost:4200/route/todos");
    // obs.subscribe((response)=>
    // {
     
   
    //   this.todo=response;
    //   console.log(this.todo);
     
    // });

     

}
}
