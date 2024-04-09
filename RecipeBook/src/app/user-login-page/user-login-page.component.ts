import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent {
  userLoginForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { 
    this.userLoginForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      country: ['', Validators.required],
      termsAccepted: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.userLoginForm.valid) {
      const formData = this.userLoginForm.value;
      this.http.post('http://localhost:5086/api/UserControllers/PostUserLogin', formData)
        .subscribe(response => {
          console.log('User form submitted');
          this.formSubmitted = true;
          this.router.navigate(['/options']);
        }, error => {
          console.error('Error submitting user form:', error);
        });
    } else {
      console.error('User form is invalid');
    }
  }
}
