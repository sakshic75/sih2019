import { Component, OnInit } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { environment as env } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule} from '@angular/material';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public env=env;
  

  ngOnInit()
  {
   

    // let d=this.todoService.getAllTodos();
    // d.subscribe(

    //   data=>
    //   {
    //    this.todo=data;
    //   }
    // );
  



    
  }





}
