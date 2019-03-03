import { Component, OnInit } from '@angular/core';

import { ReactiveFormsModule }    from '@angular/forms';
import { environment as env } from '../../environments/environment';
import {User}  from "./user";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule} from '@angular/material';



import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myForm: any;
public env=env;
constructor(
        private formBuilder: FormBuilder
    ) {}

ngOnInit() {
    this.myForm = this.formBuilder.group({
            phone: [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
        });
}
}