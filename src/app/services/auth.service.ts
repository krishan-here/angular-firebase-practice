import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CustomerData } from './models/customerData';
import { RegisterCustomerData } from './models/registerCustomerData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  baseUrl= 'http://localhost:3000';


  constructor(
    private httpClient: HttpClient
  ) { }

  setUserData(userData: CustomerData) {
    const user = JSON.stringify(userData);
    localStorage.setItem('user', user)
  }

  removeUserData() {
    localStorage.removeItem('user');
  }

  createCustomer(userData: RegisterCustomerData | any): Observable<any>{
    return this.httpClient.post(this.baseUrl + '/register', userData);
  }

  loginCustomer(userData: any): Observable<any>{
    return this.httpClient.post(this.baseUrl + '/login', {
      email: userData.email,
      password: userData.password
    }).pipe(map((res: any) => {
      const userData = res;
      this.setUserData(userData);
      return res;
    }));
  }

  getAuthToken(){
    let user;
    if(localStorage.getItem('user')){
    user = localStorage.getItem('user') || '';
    const userDetails = JSON.parse(user);
      return userDetails.token;
    }
    return null;
  }

  fetchUserData(pageIndex: number, pageSize: number){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts').pipe(map((res: any) => {
      const start = pageIndex * pageSize;
      const length = res.length;
      return {
        length,
        data: res.splice(start, pageSize)
      };
    }));
  }

  logoutCustomer() {
    this.removeUserData();
  }


  
}
