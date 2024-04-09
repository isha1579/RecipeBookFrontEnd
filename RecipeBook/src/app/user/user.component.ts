import { Component, OnInit, OnDestroy, DoCheck, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy, DoCheck, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  showForms: boolean = false;
  checkboxChecked: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('UserComponent initialized');
  }

  ngOnDestroy() {
    console.log('UserComponent destroyed');
  }

  ngDoCheck() {
    console.log('UserComponent checked');
  }

  ngOnChanges() {
    console.log('UserComponent changed');
  }

  ngAfterViewInit() {
    console.log('UserComponent view initialized');
  }

  ngAfterViewChecked() {
    console.log('UserComponent view checked');
  }

  ngAfterContentInit() {
    console.log('UserComponent content initialized');
  }

  ngAfterContentChecked() {
    console.log('UserComponent content checked');
  }

  navigateToUserLoginPage() {
    this.showForms = true;
  }
}
