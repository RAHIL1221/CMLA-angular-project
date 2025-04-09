import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerService } from '../banner.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-banner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-banner.component.html',
  styleUrl: './add-banner.component.css'
})
export class AddBannerComponent {
  bannerObj:any={
    title:'',
    image:''
  }
  public imgUrl:any;
  localData: any = localStorage.getItem("user"); // Retrieve localData
  public userId: any;
 
  token = JSON.parse(this.localData).data.bearer_token;

  selectedFile: File | null = null;
  
  constructor(private bannersServices:BannerService,private router:Router) {}

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target && target.files && target.files.length > 0) {
      this.selectedFile = target.files[0] as File;
    
    // Create preview of selected image
    if (this.selectedFile) {
      console.log('Current prodcast:', this.bannerObj);
      this.bannersServices.bannerUpload(this.token, this.selectedFile).subscribe({
        next: (response) => {

          console.log(response);
          this.bannerObj.image=response.data.image_token||'';
this.imgUrl=response.data.image_url||'';
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
}

  onSubmit() {
 
    console.log('Updated prodcast:', this.bannerObj)
this.bannersServices.addBanner(this.bannerObj,this.token).subscribe({
  next:(response)=>{
    console.log(response)
     Swal.fire({
              position: 'top-end',
              toast: true,
              customClass: {
                popup: 'colored-toast',
              },
              icon: 'success',
              title: 'Banner Added Successfully',
              showConfirmButton: false,
              timer: 1500
            });
    this.router.navigate(['/list-banner'])
  },
  error:(err)=>{
    console.log(err);
    
  }
})
}
}