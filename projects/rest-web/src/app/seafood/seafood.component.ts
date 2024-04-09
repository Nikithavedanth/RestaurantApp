import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seafood',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seafood.component.html',
  styleUrl: './seafood.component.css'
})
export class SeafoodComponent {
  menuObject:any={};

  ngOnInit(){
    this.getSeafoodDescription();
  }
getSeafoodDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
