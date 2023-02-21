import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData = [];
  displayedColumns = ['userId', 'title'];
  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.authService.fetchUserData().subscribe(
      (res: any) => {
        this.userData = res.splice(0,10);
      }
    )
  }
  

  logout(){
    this.authService.logoutCustomer();
    this.router.navigate(['/login']);
  }
}
