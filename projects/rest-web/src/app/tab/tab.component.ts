import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [RouterModule,RouterModule,NgbSlide,NgbCarousel, HomeComponent],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent {

}
