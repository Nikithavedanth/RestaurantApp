import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chicken',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chicken.component.html',
  styleUrl: './chicken.component.css'
})
export class ChickenComponent {
  menuObject:any={};

  ngOnInit(){
    this.getChickenDescription();
  }
getChickenDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
