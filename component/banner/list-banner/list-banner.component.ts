import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-banner.component.html',
  styleUrl: './list-banner.component.css'
})
export class ListBannerComponent implements OnInit {
  localData: any = localStorage.getItem("user");
  token = JSON.parse(this.localData).data.bearer_token;
  public bannerContent: any;

  constructor(private bannersServices: BannerService, private router:Router){
    
  }

  ngOnInit(): void {
    this.getAllBanner();
  }

  getAllBanner() {
    this.bannersServices.getAllBanners(this.token).subscribe({
      next: (response) => {
        console.log(response.data.data);
        this.bannerContent = response.data.data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  addBanner() {
    this.router.navigate(['/add-banner'])
  }
  
deleteBanner(id:string){
 Swal.fire({
       title: "Are you Sure ?",
       showDenyButton: true,
       showCancelButton: true,
       confirmButtonText: "Yes Delete",
       denyButtonText: `No Don't Delete`
     }).then(() => {
       this.bannersServices.deleteBanner(id,this.token).subscribe((response)=>{
         console.log('Deleted Successfully',response)
         
          Swal.fire({
                   position: 'top-end',
                   toast: true,
                   customClass: {
                     popup: 'colored-toast',
                   },
                   icon: 'success',
                   title: 'Banner Deleted Successfully',
                   showConfirmButton: false,
                   timer: 1500
                 });
           },(error)=>{
             console.log('Error',error)
           }
         )
       
     })
 

}

updateBanner(id:string){
  this.bannersServices.getBanner(id,this.token).subscribe(
    (response)=>{
      console.log(response)
    }
  )
  this.router.navigate([`/update-banner/${id}`])
}
  
}
