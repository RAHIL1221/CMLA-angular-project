import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureEventsService } from '../feature-events.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-feature-events',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-feature-events.component.html',
  styleUrl: './add-feature-events.component.css'
})
export class AddFeatureEventsComponent {
fEvent:any={
  id:"",
  title:"",
  description:"",
  date:"",
  time:"",
  image:"",
  url_path:"",
  location:"",
}
 localData:any = localStorage.getItem("user"); // Retrieve localData
 selectedFile: File | null = null;
imgUrl:any;
  token = JSON.parse(this.localData).data.bearer_token; 

constructor(private fEventssService: FeatureEventsService,private router:Router){}
onFileSelected(event:any){
  this.selectedFile = event.target.files[0] as File;

  // Create preview of selected image
  if (this.selectedFile) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.fEvent.image = e.target.result;
    };
    this.fEventssService.uploadImage(this.token, this.selectedFile!).subscribe({
      next: (response) => {
        this.fEvent.image = response.data.image_token;
   this.imgUrl=response.data.image_url;

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
  console.log(this.fEvent)

}
 addEvent(){
 try {
    
  this.fEventssService.addEvent(this.fEvent,this.token).subscribe({
    next: (response) => {
      console.log('New Event Added Successfully', response);

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
