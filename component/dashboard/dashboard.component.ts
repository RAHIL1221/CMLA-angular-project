import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  public userName: any=[];
public userData:any;
  constructor(private dashboardService: DashboardService,private router:Router) {}

  ngOnInit(): void {
    const localData:any = localStorage.getItem("user"); // Retrieve localData

    // console.log(JSON.parse(localData).data.bearer_token); //token
    if (localData) {
       this.userName = JSON.parse(localData).data.user.name // Assuming localData is a JSON string
     
    } else {
        console.log('No user data found');
    }
  
  
    const token = JSON.parse(localData).data.bearer_token; 
    this.dashboardService.getUserData(token).subscribe({

      next: (response) => {
        this.userData=response
        console.log(this.userData);

        // TOTAL_CUSTOMER: '231', TOTAL_ANNOUNCEMENT: '104', TOTAL_PRODCAST: '10', TOTAL_FEATURED_EVENT: '3'
      },
      error: (err) => {
        console.error('Token not exist', err);
      }
    });
  }
  showDashboard(){
    this.router.navigate(['/dashboard'])
  }
  showAnnouncements(){
    this.router.navigate(['/list-annoucements'])
  }
  showProdcast(){
    this.router.navigate(['/list-prodcasts'])
  }

showBanner(){
  this.router.navigate(['/list-banner'])
}
showFeaturedEvent(){
  this.router.navigate(['/list-feature-events'])
}
moreLinks(){
  this.router.navigate(['/list-more-links'])

}
}
