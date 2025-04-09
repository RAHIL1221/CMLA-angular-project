import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service'; // Import the UserProfileService
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [ FormsModule], // Include FormsModule here
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  public userName: any;
  public userEmail: string = ''; 
  public userPassword:string='';

  constructor(private router: Router, private userProfileService: UserProfileService) {} // Inject UserProfileService

  public localData:any = localStorage.getItem("user"); // Retrieve localData
  ngOnInit(): void {
    if (this.localData != null) {
      this.userName = JSON.parse(this.localData).data.user.name;
      this.userEmail = JSON.parse(this.localData).data.user.email;
    } else {
      console.log('No user data found');
    }
  }

  
  onSubmit() {
    
      const token = JSON.parse(this.localData).data.bearer_token; 
    const userId = this.localData ? JSON.parse(this.localData).data.user.id : ''; // Handle potential null value

    this.userProfileService.updateUserProfile(userId, this.userName, this.userEmail,this.userPassword,token,).subscribe({
      next: (response) => {
        console.log('Profile updated successfully', response);
      },
      error: (err) => {
        console.error('Error updating profile', err);
      }
    });
  }

  showDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
