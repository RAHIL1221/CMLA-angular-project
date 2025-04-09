import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProdcastService } from '../prodcast.service';

@Component({
  selector: 'app-list-prodcast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-prodcast.component.html',
  styleUrl: './list-prodcast.component.css'
})
export class ListProdcastComponent implements OnInit{
  
   localData:any = localStorage.getItem("user"); // Retrieve localData
  token = JSON.parse(this.localData).data.bearer_token; 


  public userName:any;
  public dataTable:any;
  constructor(private prodcastServices:ProdcastService,private router:Router){}
  ngOnInit(): void {
    this.veiwProdcast()
  }
  addButton(){
this.router.navigate(['/add-prodcasts'])
  }
  veiwProdcast(){
   
    console.log('t',this.token)
    this.prodcastServices.getAllProdcasts(this.token).subscribe({
      
      next: (response) => {
        this.dataTable=response.data.data
        console.log(this.dataTable);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteProdcast(id:string){
    Swal.fire({
      title: "Are you Sure ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes Delete",
      denyButtonText: `No Don't Delete`
    }).then(() => {
      this.prodcastServices.deleteProdcast(id,this.token).subscribe((response)=>{
        console.log('Deleted Successfully',response)
        
         Swal.fire({
                  position: 'top-end',
                  toast: true,
                  customClass: {
                    popup: 'colored-toast',
                  },
                  icon: 'success',
                  title: 'Prodcast Deleted Successfully',
                  showConfirmButton: false,
                  timer: 1500
                });
          },(error)=>{
            console.log('Error',error)
          }
        )
      
    })
    
    this.router.navigate(['/list-prodcasts'])
    }

  updateComp(id:string){
    this.prodcastServices.getProdcast(id,this.token).subscribe(
      (response)=>{
        console.log(response)
      }
    )
    this.router.navigate([`/update-prodcast/${id}`])
  }

}