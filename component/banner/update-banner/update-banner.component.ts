import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BannerService } from '../banner.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-banner',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-banner.component.html',
  styleUrl: './update-banner.component.css'
})
export class UpdateBannerComponent implements OnInit{
  imgUrl:any;
  banner:any;
  updatebanner:any;
  bannerObjUp:any={
    title:'',
    image:'',
  }
  localData: any = localStorage.getItem("user"); // Retrieve localData
  public userId: any;
  token = JSON.parse(this.localData).data.bearer_token;
  selectedFile: File | null = null;
constructor(private bannerServices:BannerService,private activeRoute:ActivatedRoute){}
ngOnInit(): void {
  const idUser = this.activeRoute.snapshot.paramMap.get('id')! || '0';
  this.userId = idUser
  this.bannerServices.getBanner(this.userId,this.token).subscribe({
    next:(response)=>{
      this.banner=response
    this.updatebanner=this.banner.data
  this.bannerObjUp={...this.updatebanner}
  console.log(this.bannerObjUp)
  }
  })
}

onFileSelected(event:any){
  const target = event.target as HTMLInputElement;
  if (target && target.files && target.files.length > 0) {
    this.selectedFile = target.files[0] as File;
    console.log('file Selected');
    
    if (this.selectedFile) {
      this.bannerServices.bannerUpload(this.token, this.selectedFile).subscribe({
        next: (response) => {
    this.bannerObjUp.image=response.data.image_token
    this.imgUrl=response.data.image_url
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
}

onSubmit(){
this.bannerServices.updateBanner(this.userId,this.bannerObjUp,this.token).subscribe({
  next: (resp)=>{
console.log(resp)
  },error:
  (err)=>{
    console.log(err);
    
  }}
)
  
}
}
