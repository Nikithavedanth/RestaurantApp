import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// import axios from 'axios'; 
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule,CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router){

  }
  menuObject:any = {};
 
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
}
