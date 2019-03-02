import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
hide=true;
public env=env;
  constructor() { }

  ngOnInit() {
  }

}
