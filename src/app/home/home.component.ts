import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customerDetail = CUSTOMER_DETAILS;
  listOfPhones = CUSTOMER_DETAILS.listOfPhoneNumbers;
  phoneColumns = CUSTOMER_DETAILS.phonesColumn;
  listOfAddress = CUSTOMER_DETAILS.listOfAddress;
  addressColumns = CUSTOMER_DETAILS.addressColumn;

  accountDetail = ACCOUNT_DETAILS;
  listOfPaymentSchedules = ACCOUNT_DETAILS.paymentSchedules;
  paymentColumns = ACCOUNT_DETAILS.paymentColumns;

  currentTab = {
    customer: 'BASIC',
    account: 'BASIC',
  };

  accountDetailsColumn = [
    'account',
    'type',
    'legal',
    'previous',
    'application',
  ];
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  goToTab(panel: 'customer' | 'account', tab: string) {
    this.currentTab[panel] = tab;
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
      active: true,
    },
    {
      type: 'RESIDENT',
      address: 'H-6, Hyderabad',
      active: false,
    },
    {
      type: 'PARMANENT',
      address: 'Indore, Madhya Pradesh-450002',
      active: true,
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
      acNumber: '12893839293393',
    },
    {
      type: 'phone',
      phoneNumber: '8379382938',
      ext: '+011',
      timezone: 'SA',
      relationship: 'N/A',
      inService: 'YES',
      acNumber: '39393839293393',
    },
    {
      type: 'mobile',
      phoneNumber: '611382938',
      ext: '+91',
      timezone: 'ITC',
      relationship: 'N/A',
      inService: 'YES',
      acNumber: '6723839293393',
    },
  ],

  phonesColumn: [
    'type',
    'phoneNumber',
    'ext',
    'timezone',
    'relationship',
    'inService',
    'acNumber',
  ],
  addressColumn: ['type', 'address', 'active'],
};

const ACCOUNT_DETAILS = {
  accountNumber: '19283992819283',
  accountStatus: 'Active',
  contractDate: '12-02-20',
  closedDate: '12-02-24',
  payoffDate: '10-03-20',
  loanDetails: {
    loanBalance: '12,000',
    interestRecieableRounded: 'N/A',
    accrualRate: '5%',
    originalAmount: '45,0000',
    overpaymentAmount: '23,000',
    interestPaidLifetoDate: 'N/A',
    payoffAmount: '2000',
    APR: 'N/A',
    maturityDate: '23-03-24',
  },
  paymentSchedules: [
    {
      startDate: '12-03-20',
      endDate: '12-03-24',
      frequency: 'high',
      payments: 'Done',
      amount: '2000',
      paymentType: 'Normal',
      leadDays: '35',
    },
    {
      startDate: '12-03-20',
      endDate: '12-03-24',
      frequency: 'low',
      payments: 'Pending',
      amount: '2000',
      paymentType: 'Normal',
      leadDays: '29',
    },
    {
      startDate: '12-03-20',
      endDate: '12-03-24',
      frequency: 'low',
      payments: 'Done',
      amount: '2000',
      paymentType: 'Medium',
      leadDays: '40',
    }
  ],
  recentHistory: {
    lastPaymentEffectiveDate: '12-04-22',
    lastPaymentAmount: '23,000'
  },

  paymentColumns: ['startDate', 'endDate', 'frequency', 'payments', 'amount', 'paymentType', 'leadDays']
};
