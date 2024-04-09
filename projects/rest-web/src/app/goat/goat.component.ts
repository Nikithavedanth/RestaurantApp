import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-goat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goat.component.html',
  styleUrl: './goat.component.css'
})
export class GoatComponent {
  menuObject:any={};

  ngOnInit(){
    this.getGoatDescription();
  }
getGoatDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
