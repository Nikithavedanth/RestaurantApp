import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-vegan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vegan.component.html',
  styleUrl: './vegan.component.css'
})
export class VeganComponent {
  menuObject:any={};

  ngOnInit(){
    this.getVeganDescription();
  }
getVeganDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
