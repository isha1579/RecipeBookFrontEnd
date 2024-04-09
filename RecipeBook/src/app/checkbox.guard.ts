import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckboxGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const checkboxChecked = localStorage.getItem('checkboxChecked');
    if (checkboxChecked && checkboxChecked === 'true') {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
