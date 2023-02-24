import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customerDetail = CUSTOMER_DETAILS;
  
  listOfPhones = CUSTOMER_DETAILS.listOfPhoneNumbers;
  phoneColumns = CUSTOMER_DETAILS.phonesColumn;

  listOfAddress = CUSTOMER_DETAILS.listOfAddress;
  addressColumns = CUSTOMER_DETAILS.addressColumn;


  accountDetailsColumn = ['account', 'type', 'legal', 'previous', 'application'];
  currentTab = 'BASIC';
  constructor(
    private authService: AuthService,
    private router: Router
    ){}

  ngOnInit(): void {
    // this.getUserData(0, this.pageSize);
  }

  goToTab(tab: string){
    this.currentTab = tab;
  }

  // getUserData(pageIndex: number, pageSize: number){

  // }

  getVehicleDetails() {
    console.log('vehicle details');
    
  }

  getTransactionDetails() {
    console.log('transaction data');
  }
  

  logout(){
    this.authService.logoutCustomer();
    this.router.navigate(['/login']);
  }
}

const CUSTOMER_DETAILS = {
  title: 'Mr',
  firstName: 'Rahul',
  lastName: 'Jaydas',
  customerNumber: '111892',
  ssn: '***-**-1982',
  taxIdentifier: 'N/A',
  listOfAddress: [
    {
      type: 'PARMANENT',
      address: 'Durgapur, West Bengal-713363',
      active: true
    },
    {
      type: 'RESIDENT',
      address: 'H-6, Hyderabad',
      active: false
    },
    {
      type: 'PARMANENT',
      address: 'Indore, Madhya Pradesh-450002',
      active: true
    },
  ],
  listOfPhoneNumbers: [
    {
      type: 'mobile',
      phoneNumber: '9839382938',
      ext: '+91',
      timezone: 'ITC',
      relationship: 'N/A',
      inService: 'YES',
      acNumber: '12893839293393'
    },
    {
      type: 'phone',
      phoneNumber: '8379382938',
      ext: '+011',
      timezone: 'SA',
      relationship: 'N/A',
      inService: 'YES',
      acNumber: '39393839293393'
    },
    {
      type: 'mobile',
      phoneNumber: '611382938',
      ext: '+91',
      timezone: 'ITC',
      relationship: 'N/A',
      inService: 'YES',
      acNumber: '6723839293393'
    },
  ],



  phonesColumn: ['type', 'phoneNumber', 'ext', 'timezone', 'relationship', 'inService', 'acNumber'],
  addressColumn: ['type', 'address', 'active']
}

