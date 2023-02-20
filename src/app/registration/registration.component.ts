import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService, 
    private router: Router
  ){}

  registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
  });

  onSubmit(){
    console.log(this.registrationForm.value);
    
    if(this.registrationForm.controls.password.value === this.registrationForm.controls.confirmPassword.value){
      this.authService.createCustomer(this.registrationForm.value).subscribe(
        (res)=> {
          this.router.navigate(['/login']);
        },
        (err)=>{
          // getting error on registrations
          console.log(err);
        }
      );
    }else{
      // password and confirm password is missmatched

    }
  }


}
