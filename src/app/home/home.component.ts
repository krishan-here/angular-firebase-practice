import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData = [
    {
      account: 1928921,
      type: 'Charge-off',
      legal_relationship: 'Primary',
      previous_account: 39322,
      application_number: 'N/A'
    },
    {
      account: 182921,
      type: 'Shadow',
      legal_relationship: 'Primary',
      previous_account: 39389,
      application_number: 'N/A'
    }
  ];
  dataLength = 0;
  pageSize = 10;
  displayedColumns = ['account', 'type', 'legal', 'previous', 'application'];
  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  ngOnInit(): void {
    // this.getUserData(0, this.pageSize);
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

  getData(event: any){
    console.log(event);

    if(event.index == 0){
      this.getUserData(0, this.pageSize);
    }else if(event.index == 1){
      this.getVehicleDetails();
    }else{
      this.getTransactionDetails();
    }
    
  }

  getVehicleDetails() {
    console.log('vehicle details');
    
  }

  getTransactionDetails() {
    console.log('transaction data');
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
