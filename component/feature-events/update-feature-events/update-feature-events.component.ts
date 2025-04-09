import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { FeatureEventsService } from '../feature-events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-feature-events',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-feature-events.component.html',
  styleUrl: './update-feature-events.component.css'
})
export class UpdateFeatureEventsComponent implements OnInit{
  formEvent:any={
  id:"",
  title:"",
  description:"",
  date:"",
  time:"",
  image:"",
  url_path:"",
  location:"",
}
updatefEvent:any;
fEvent:any;
 localData:any = localStorage.getItem("user"); // Retrieve localData
 selectedFile: File | null = null;
imgUrl:any;
imgCode:any;
  token = JSON.parse(this.localData).data.bearer_token; 
public userId:any;
constructor(private router: Router, 
    private activeRoute: ActivatedRoute, 
    private fEventsServices: FeatureEventsService,
    private http: HttpClient){}
ngOnInit(): void {
  const idUser = this.activeRoute.snapshot.paramMap.get('id')! || '0';
  this.userId = idUser

  this.fEventsServices.getEvent(this.userId, this.token).subscribe({
    next: (response) => {
      this.fEvent = response
      this.updatefEvent = this.fEvent.data
      this.formEvent = { ...this.updatefEvent }; 
    this.formEvent.image=this.imgCode;
      console.log(this.updatefEvent);
    },
    error: (err) => {
      console.log(err)
    }
  
  })



}


onFileSelected(event:any){
  this.selectedFile = event.target.files[0] as File;

  // Create preview of selected image
  if (this.selectedFile) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.fEvent.image = e.target.result;
    };
    this.fEventsServices.uploadImage(this.token, this.selectedFile!).subscribe({
      next: (response) => {
        this.formEvent.image = response.data.image_token;
   this.imgUrl=response.data.image_url;
   console.log(this.formEvent)

      },
      error: (error) => {
        console.error('Image upload failed:', error);
        Swal.fire({
          icon: 'error',
          title: 'Image Upload Failed',
          text: 'Could not upload the banner image. Please try again.'
        });
   
    }});
  }

}
 updateEvent(){
   console.log('this is updated',this.formEvent)
  
 try {
    
  this.fEventsServices.updateEvent(this.userId,this.formEvent,this.token).subscribe({

    next: (response) => {
      console.log('Event Updated Successfully', response);
      // Show SweetAlert2 toast alert
        Swal.fire({
          position: 'top-end',
          toast: true,
          customClass: {
            popup: 'colored-toast',
          },
          icon: 'success',
          title: 'Event Added Successfully',
          showConfirmButton: false,
          timer: 1500
        });

      },
    error: (err) => {
      console.error('Error updating profile', err);
    }
  });
this.router.navigate(['/list-feature-events'])
}catch{
 (error:any)=>{
  console.error('Error in addEvent:', error);
 } 
}
}

}
