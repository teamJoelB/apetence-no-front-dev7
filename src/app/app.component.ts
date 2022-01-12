import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateMemoComponent } from './memo/create-memo/create-memo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'primo-ang-dev7-2021';

  constructor(private dialog: MatDialog, private router: Router) { }
  ngOnInit(): void {

  }

  callMydial() {
    const myDialog = this.dialog.open(CreateMemoComponent);
    myDialog.afterClosed().subscribe(result => {
      this.reloadComponent();
    });
  }


  reloadComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([currentUrl]);
  }

}
