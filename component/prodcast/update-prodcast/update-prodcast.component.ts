import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdcastService } from '../prodcast.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-prodcast',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-prodcast.component.html',
  styleUrl: './update-prodcast.component.css'
})
export class UpdateProdcastComponent implements OnInit {
  public Prodcast: any;
  public updateProdcast: any;
  public imgCode:any;
  public imgUrl:any;
  prodcast:any={
    name: "",
      author: "",
      small_description: "",
      description: "",
      banner_image:"",
      audio_link: ""
  }
  localData: any = localStorage.getItem("user"); // Retrieve localData
  public userId: any;
  token = JSON.parse(this.localData).data.bearer_token;

  selectedFile: File | null = null;

  constructor(
    private router: Router, 
    private activeRoute: ActivatedRoute, 
    private prodcastServices: ProdcastService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const idUser = this.activeRoute.snapshot.paramMap.get('id')! || '0';
    this.userId = idUser

    this.prodcastServices.getProdcast(this.userId, this.token).subscribe({
      next: (response) => {
        this.Prodcast = response
        this.updateProdcast = this.Prodcast.data
        this.prodcast = { ...this.updateProdcast }; 
      this.prodcast.banner_image=this.imgCode;
        console.log(this.updateProdcast);
      },
      error: (err) => {
        console.log(err)
      }
    })



  }

  onFileSelected(event: any,token:string) {
    this.selectedFile = event.target.files[0] as File;
    
    // Create preview of selected image
    if (this.selectedFile) {
      console.log('Current prodcast:', this.prodcast);
      this.prodcastServices.uploadImage(token, this.selectedFile).subscribe({
        next: (response) => {
          if (response?.data?.image_token) {
            // Preserve existing banner_image if it exists, otherwise use new imgUrl
            this.imgUrl = response.data.image_url;
            this.imgCode = response.data.image_token
            this.prodcast.banner_image = this.prodcast.banner_image || this.imgCode;
            console.log('Updated banner_image:', this.prodcast.banner_image);
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
  
  updateProdcasts(id: any, token: string) {
    // Create a copy of the prodcast object to preserve the banner_image
    const updateData = { ...this.prodcast };
    console.log('insideUP',updateData)
    this.prodcastServices.updateProdcast(id, token, updateData).subscribe({
      next: (response: any) => {
        // Update the prodcast with the response data if available
        if (response?.data) {
          this.prodcast = { ...this.prodcast, ...response.data };
        }
        
        console.log('Update response:', response);
        console.log('Updated prodcast:', this.prodcast);
        
        // Show SweetAlert2 toast alert
        Swal.fire({
          position: 'top-end',
          toast: true,
          customClass: {
            popup: 'colored-toast',
          },
          icon: 'success',
          title: 'Prodcast Updated Successfully',
          showConfirmButton: false,
          timer: 1500
        });
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}