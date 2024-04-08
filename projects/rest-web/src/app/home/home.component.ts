import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TabComponent } from '../tab/tab.component';
import { CaptionComponent } from '../caption/caption.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, RouterOutlet,TabComponent,CaptionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
