import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule
      ],
      providers: [
        AuthService,
        FormBuilder,
        Router,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test form group element count', ()=> {
    const formElement = fixture.debugElement.nativeElement.querySelector('#registrationForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toBe(6);
  });

  it('should test initial values in the registration form', ()=> {
    const formElement = component.registrationForm;
    const formValues = {
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      password: '',
      confirmPassword: '',
    }    

    expect(formElement.value).toEqual(formValues);
  });

  it('should invalid form on invalid inputs', ()=> {
    component.registrationForm.controls.firstName.setValue('');
    component.registrationForm.controls.lastName.setValue('');
    component.registrationForm.controls.dob.setValue('');
    component.registrationForm.controls.email.setValue('');
    component.registrationForm.controls.password.setValue('');
    component.registrationForm.controls.confirmPassword.setValue('');

    expect(component.registrationForm.invalid).toBeTruthy();
  });

  it('should disable submit button on invalid form', ()=> {
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type = submit]');
    spyOn(component, 'onSubmit');
    submitButton.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('should enable submit button on valid form', ()=> {
    const submitButton = fixture.debugElement.nativeElement.querySelector('button[type = submit]');

    component.registrationForm.controls.firstName.setValue('Ram');
    component.registrationForm.controls.lastName.setValue('Verma');
    component.registrationForm.controls.dob.setValue('21-03-98');
    component.registrationForm.controls.email.setValue('rv@gm.com');
    component.registrationForm.controls.password.setValue('123');
    component.registrationForm.controls.confirmPassword.setValue('123');

    // fixture.detectChanges();
    expect(submitButton.disable).toBeFalsy();
  });


});
