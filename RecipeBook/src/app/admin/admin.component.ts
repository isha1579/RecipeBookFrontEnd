import { Component, OnInit, OnDestroy, DoCheck, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy, DoCheck, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('AdminComponent initialized');
  }

  ngOnDestroy() {
    console.log('AdminComponent destroyed');
  }

  ngDoCheck() {
    console.log('AdminComponent checked');
  }

  ngOnChanges() {
    console.log('AdminComponent changed');
  }

  ngAfterViewInit() {
    console.log('AdminComponent view initialized');
  }

  ngAfterViewChecked() {
    console.log('AdminComponent view checked');
  }

  ngAfterContentInit() {
    console.log('AdminComponent content initialized');
  }

  ngAfterContentChecked() {
    console.log('AdminComponent content checked');
  }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      console.log('Login successful');
      this.isLoggedIn = true; 
      this.router.navigate(['/admin-panel']);
    } else {
      alert('Invalid username or password');
    }
  }
}
