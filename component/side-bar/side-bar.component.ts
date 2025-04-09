import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  constructor(private router:Router){}
  showDashboard(){
    this.router.navigate(['/dashboard'])
  }
  showAnnouncements(){
    this.router.navigate(['/list-annoucements'])
  }
}
