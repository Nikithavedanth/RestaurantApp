import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.css'
})
export class StarterComponent {
  menuObject:any={};

  ngOnInit(){
    this.getStarterDescription();
  }
getStarterDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
