import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FeatureEventsService } from '../feature-events.service';

@Component({
  selector: 'app-feature-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-feature-events.component.html',
  styleUrl: './list-feature-events.component.css'
})
export class ListFeatureEventsComponent implements OnInit{
  
   localData:any = localStorage.getItem("user"); // Retrieve localData
  token = JSON.parse(this.localData).data.bearer_token; 


  public userName:any;
  public dataTable:any;
  constructor(private fEventsService: FeatureEventsService,private router:Router){}
  ngOnInit(): void {
    this.veiwEvents()
  }
  addButton(){
this.router.navigate(['/add-feature-events'])
  }
  veiwEvents(){
   
    console.log('t',this.token)
    this.fEventsService.getEvents(this.token).subscribe({
      
      next: (response) => {
        this.dataTable=response.data.data
        console.log(this.dataTable);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteEvent(id:string){
    Swal.fire({
      title: "Are you Sure ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes Delete",
      denyButtonText: `No Don't Delete`
    }).then(() => {
      this.fEventsService.deleteEvent(id,this.token).subscribe((response)=>{
        console.log('Deleted Successfully',response)
        
         Swal.fire({
                  position: 'top-end',
                  toast: true,
                  customClass: {
                    popup: 'colored-toast',
                  },
                  icon: 'success',
                  title: 'Event Deleted Successfully',
                  showConfirmButton: false,
                  timer: 1500
                });
          },(error)=>{
            console.log('Error',error)
          }
        )
      
    })
    
    this.router.navigate(['/list-feature-events'])
    }

    updateEvent(id:string){
    this.fEventsService.getEvent(id,this.token).subscribe()
    this.router.navigate([`/update-feature-events/${id}`])
  }

}




