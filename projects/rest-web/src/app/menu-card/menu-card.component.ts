import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [NgbCarouselModule,CommonModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.css'
})
export class MenuCardComponent {
  menuObject:any={};
  constructor(private router: Router){
  
  }

  ngOnInit(){
    this.getMenuObject();
  }
  getMenuObject(){
    fetch('../../assets/categories.json').then(response=>response.json()).then(data=>{
      this.menuObject=data
    })
  }

  getMenuDescription(idCategory:any){

    switch(idCategory){
      case '1': this.router.navigate(['/beef'])
      break;
      case '2':  this.router.navigate(['/chicken'])
      break;
      case '3': this.router.navigate(['/dessert'])
      break;
      case '4': this.router.navigate(['/lamb'])
      break;
      case '5': this.router.navigate(['/tacos'])
      break;
      case '6': this.router.navigate(['/pasta'])
      break;
      case '7': this.router.navigate(['/pork'])
      break;
      case '8': this.router.navigate(['/seafood'])
      break;
      case '9': this.router.navigate(['/side'])
      break;
      case '10': this.router.navigate(['/starter'])
      break;
      case '11': this.router.navigate(['/vegan'])
      break;
      case '12': this.router.navigate(['/vegetarian'])
      break;
      case '13': this.router.navigate(['/breakfast'])
      break;
      case '14': this.router.navigate(['/goat'])
      break;
      default: this.router.navigate(['/home'])
      break;
    }
  }
  slides = [
    { image: '../../assets/bg.jpg', caption: 'Slide 1' },
    { image: '../../assets/bg2.jpg', caption: 'Slide 2' },
    { image: '../../assets/bg3.avif', caption: 'Slide 3' }
  ];


}
