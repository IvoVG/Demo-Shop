import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;
  formData!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.formData = new FormGroup({
      email: new FormControl("admin"),
      password: new FormControl("admin"),
    });
  }

  onClickSubmit(data: any) {
    this.email = data.email;
    this.password = data.password;

    console.log("Login page: " + this.email);
    console.log("Login page: " + this.password);

    this.authService.login(this.email, this.password)
       .subscribe( (data: string) => { 
          console.log("Is Login Success: " + data); 
    
         if(data) this.router.navigate(['/expenses']); 
    });
  }
}
