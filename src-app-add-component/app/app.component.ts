import { Component, inject } from '@angular/core';
import { RouterModule, Router, RouterOutlet } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  
  imports: [
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    RouterOutlet
],
})
export class AppComponent {
  title = 'My Angular App';

  private router = inject(Router); 

  constructor() {
  }
}
