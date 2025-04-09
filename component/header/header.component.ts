import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[RouterOutlet],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // Corrected this to 'styleUrls' (plural)
})
export class HeaderComponent implements OnInit {
  public userName: any; // Define localData as a class property

  constructor() {}
  router = inject(Router);
  

  ngOnInit(): void {
    const localData = localStorage.getItem("user"); // Retrieve localData
    if (localData!= null) {
       this.userName = JSON.parse(localData).data.user.name;
        // Assuming localData is a JSON string
         // Log the user's name
    } else {
        console.log('No user data found');
    }
  
  }
  ProfileSetting(){
    this.router.navigate(['user-profile']);
    }
    logout(){
      localStorage.clear();
      this.router.navigate(['/login']);
    }
}
