import { Component, OnInit } from '@angular/core';
import { ProdcastService } from '../prodcast.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-prodcast',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-prodcast.component.html',
  styleUrl: './add-prodcast.component.css'
})
export class AddProdcastComponent implements OnInit{
prodcast:any={
  name: "",
    author: "",
    small_description: "",
    description: "",
    banner_image: "",
    audio_link: ""
}
 localData:any = localStorage.getItem("user"); // Retrieve localData
 selectedFile: File | null = null;
  token = JSON.parse(this.localData).data.bearer_token; 
ngOnInit(): void {
  console.log(this.prodcast)
}
constructor(private prodcastServices: ProdcastService,private router:Router){}

onFileSelected(event: any) {
  this.selectedFile = event.target.files[0] as File;

  // Create preview of selected image
  if (this.selectedFile) {
    // First upload the image
    
      this.prodcastServices.uploadImage(this.token, this.selectedFile!).subscribe({
        next: (response) => {
          this.prodcast.banner_image = response.data.image_token;
        
        },
        error: (error) => {
          console.error('Image upload failed:', error);
          Swal.fire({
            icon: 'error',
            title: 'Image Upload Failed',
            text: 'Could not upload the banner image. Please try again.'
          });
    
        }
      });

  }
}

addProdcast() {
  
  console.log(this.prodcast)
    

    // Then create the prodcast with the image URL
    this.prodcastServices.addProdcasts(this.prodcast, this.token).subscribe({
      next: (response) => {
        console.log('New Prodcast Added Successfully', response.data);
        Swal.fire({
          position: 'top-end',
          toast: true,
          customClass: {
            popup: 'colored-toast',
          },
          icon: 'success',
          title: 'Prodcast Added Successfully',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/list-prodcasts']);
      },
      error: (err) => {
        console.error('Error creating prodcast', err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to create prodcast. Please try again.'
        });
      }
    });

  }
}

