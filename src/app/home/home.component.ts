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
  dataLength = 0;
  pageSize = 10;
  displayedColumns = ['userId', 'title'];
  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.getUserData(0, this.pageSize);
  }

  getUserData(pageIndex: number, pageSize: number){
    this.authService.fetchUserData(pageIndex, pageSize).subscribe(
      (res: any) => {
        this.userData = res.data;
        this.dataLength = res.length;
        console.log(this.userData);
        
      }
    )
  }

  pageEvents(event: any){
    console.log(event);
    this.pageSize = event.pageSize;
    this.getUserData(event.pageIndex, this.pageSize);
    
  }
  

  logout(){
    this.authService.logoutCustomer();
    this.router.navigate(['/login']);
  }
}
