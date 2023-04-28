import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit{
  @ViewChild('mat-tab-label-0-0', {static: false}) div!: ElementRef;

  isCollapsed: boolean = true;

  constructor(
    private dialog: MatDialog,
    private _focusMonitor: FocusMonitor
  ) {}


    ngAfterViewInit() {
        console.log(this.div.nativeElement);
        
        this._focusMonitor.stopMonitoring(this.div.nativeElement);
    }
}
