import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-breakfast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './breakfast.component.html',
  styleUrl: './breakfast.component.css'
})
export class BreakfastComponent {
  menuObject:any={};

  ngOnInit(){
    this.getBreakfastDescription();
  }
getBreakfastDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
