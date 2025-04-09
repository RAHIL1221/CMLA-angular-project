import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports:[CommonModule,FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:true
})
export class LoginComponent implements OnInit {
  uniqueId = Math.random().toString(36).substr(2, 9); 
  loginData = {
    email: '',
    password: '',
  
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
  }


  onSubmit(): void {
    

  
console.log(this.loginData)
    this.authService.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        if(response.status==true){
          this.router.navigate(['/dashboard']);
            const localData=JSON.stringify(response)
            localStorage.setItem("user",localData)
        }
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }
}
