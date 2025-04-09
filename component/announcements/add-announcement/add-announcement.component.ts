import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnnouncementService } from '../announcement.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-announcement',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-announcement.component.html',
  styleUrl: './add-announcement.component.css'
})
export class AddAnnouncementComponent {
announce:any={
  id:"",
  title:"",
  description:"",
  follow_link:"",
  start_date:"",
  end_date:"",
}
 localData:any = localStorage.getItem("user"); // Retrieve localData


  token = JSON.parse(this.localData).data.bearer_token; 

constructor(private announcementService: AnnouncementService,private router:Router){}

addAnnounce(){

  this.announcementService.addAnnouncements(this.announce,this.token).subscribe({
    next: (response) => {
      console.log('New Announcement Added Successfully', response);

      // Show SweetAlert2 toast alert
        Swal.fire({
          position: 'top-end',
          toast: true,
          customClass: {
            popup: 'colored-toast',
          },
          icon: 'success',
          title: 'Announcement Added Successfully',
          showConfirmButton: false,
          timer: 1500
        });
    },
    error: (err) => {
      console.error('Error updating profile', err);
    }
  });
  this.router.navigate(['/list-annoucements'])
}


}
