import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnouncementService } from '../announcement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-announcement',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-announcement.component.html',
  styleUrl: './update-announcement.component.css'
})
export class UpdateAnnouncementComponent implements OnInit {
  public Announce: any;
  public updateAnnounce: any;
  announce: any = { title: '', description: '', follow_link: '', start_date: '', end_date: '' }
  localData: any = localStorage.getItem("user"); // Retrieve localData
  public userId: any;
  token = JSON.parse(this.localData).data.bearer_token;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    const idUser = this.activeRoute.snapshot.paramMap.get('id')! || '0';
    this.userId = idUser

    this.announcementService.getAnnounce(this.userId, this.token).subscribe({
      next: (response) => {
        this.Announce = response
        this.updateAnnounce = this.Announce.data
        this.announce = { ...this.updateAnnounce }; // Set announce object with existing announcement data
        console.log(this.updateAnnounce);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  updateAnnouce(id: any, token: string) {
    this.announcementService.updateAnnouncement(id, token, this.announce).subscribe({
      next: (response) => {
        console.log(token)
        console.log(id)
        console.log(response)

        // Show SweetAlert2 toast alert
        Swal.fire({
          position: 'top-end',
          toast: true,
          customClass: {
            popup: 'colored-toast',
          },
          icon: 'success',
          title: 'Announcement Updated Successfully',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error: (err) => {
        console.log(err)
      }
    })
    this.router.navigate(['list-annoucements'])
  }
}


// position: 'center',
// iconColor: 'white',
// ,
// showConfirmButton: false,
// timer: 1500,