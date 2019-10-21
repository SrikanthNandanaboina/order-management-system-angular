import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import localStorageFunctions from '../utils/localstorage-utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private emailData = localStorageFunctions.getData('email')
  private passwordData = localStorageFunctions.getData('password')
  private rememberMeData = localStorageFunctions.getData('rememberMe');

  form = new FormGroup({
    email: new FormControl(this.emailData, [Validators.required, Validators.email]),
    password: new FormControl(this.passwordData, [Validators.required, Validators.minLength(8)]),
    rememberMe: new FormControl(this.rememberMeData)
  })

  constructor(private router: Router) {}

  ngOnInit(){}

  onSubmit(){
    let loginData = this.form.value;
    if(this.form.status){
      if(loginData.rememberMe){
        localStorageFunctions.storeData('email', loginData.email);
        localStorageFunctions.storeData('password', loginData.password);
        localStorageFunctions.storeData('rememberMe', loginData.rememberMe);
      }else{
        localStorage.clear();
      }
      this.router.navigate(['all-orders']);
    }
  }

}
