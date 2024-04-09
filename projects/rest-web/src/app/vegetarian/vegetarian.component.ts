import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vegetarian',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vegetarian.component.html',
  styleUrl: './vegetarian.component.css'
})
export class VegetarianComponent {
  menuObject:any={};
  ngOnInit(){
    this.getVegetarianDescription();
  }
getVegetarianDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
