import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { environment as env } from '../../environments/environment';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 hide=true;
 public env=env;

  constructor( ) {
   
   }

  ngOnInit() {
   
  }
  

}
