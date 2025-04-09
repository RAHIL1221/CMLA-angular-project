import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../announcement.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-announcements.component.html',
  styleUrl: './list-announcements.component.css'
})
export class ListAnnouncementsComponent implements OnInit{
  
   localData:any = localStorage.getItem("user"); // Retrieve localData
  token = JSON.parse(this.localData).data.bearer_token; 


  public userName:any;
  public dataTable:any;
  constructor(private announcementService: AnnouncementService,private router:Router){}
  ngOnInit(): void {
    this.veiwAnnouncements()
  }
  addButton(){
this.router.navigate(['/add-annoucements'])
  }
  veiwAnnouncements(){
   
    console.log('t',this.token)
    this.announcementService.getAnnouncements(this.token).subscribe({
      
      next: (response) => {
        this.dataTable=response.data.data
        console.log(this.dataTable);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteAnnounce(id:string){
    Swal.fire({
      title: "Are you Sure ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes Delete",
      denyButtonText: `No Don't Delete`
    }).then(() => {
      this.announcementService.deleteAnnouncement(id,this.token).subscribe((response)=>{
        console.log('Deleted Successfully',response)
        
         Swal.fire({
                  position: 'top-end',
                  toast: true,
                  customClass: {
                    popup: 'colored-toast',
                  },
                  icon: 'success',
                  title: 'Announcement Deleted Successfully',
                  showConfirmButton: false,
                  timer: 1500
                });
          },(error)=>{
            console.log('Error',error)
          }
        )
      
    })
    
    this.router.navigate(['/list-annoucements'])
    }

  updateComp(id:string){
    this.announcementService.getAnnounce(id,this.token).subscribe()
    this.router.navigate([`/update-announcement/${id}`])
  }

}




