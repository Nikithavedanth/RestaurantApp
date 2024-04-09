import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [RouterModule,RouterModule,NgbSlide,NgbCarousel, HomeComponent],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css'
})
export class TabComponent 
implements OnInit {
  constructor( private router: Router){

  }
ngOnInit(){
  this.router.navigate(['/home'])
}
}
