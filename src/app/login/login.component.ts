import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService, 
    private router: Router
  ){}

  loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
  });

  onSubmit(){
      this.authService.loginCustomer(this.loginForm.value).subscribe(
        (res)=> {
          this.router.navigate(['/home']);
        },
        (err)=>{
          // getting error on registrations
          console.log(err);
        }
      );
  }
}
