import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dessert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dessert.component.html',
  styleUrl: './dessert.component.css'
})
export class DessertComponent {
  menuObject:any={};

  ngOnInit(){
    this.getDessertDescription();
  }
getDessertDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
