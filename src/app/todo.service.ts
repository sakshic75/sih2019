import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import "rxjs/"
import {Todo} from "./Todo";
import { Farmer } from 'src/Farmer';


@Injectable({
  providedIn: 'root'

})
export class TodoService {
  apiURL: string = 'http://localhost:4200';
  todo:Object;
  farmer:Farmer;

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

getFarmerDetails()

{
  
 return this.httpClient.get("https://popular-pig-25.localtunnel.me/getFarmer?id=12354");
//   obs.subscribe((response)=>
//  {
   
 
     
//      console.log(response);
   
//  });

   

}
getEnaamDetails()

{
  
 return this.httpClient.get("http://localhost:4200/route/enaam");
//   obs.subscribe((response)=>
//  {
   
 
     
//      console.log(response);
   
//  });

   

}
}
