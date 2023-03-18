import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  
  @ViewChild('formModal') formModal!: TemplateRef<any>;

  constructor(
    private dialog: MatDialog
  ) {}




  openDialog() {
    const dialogRef = this.dialog.open(this.formModal);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
