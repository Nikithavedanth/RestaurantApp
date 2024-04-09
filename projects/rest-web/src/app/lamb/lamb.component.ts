import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lamb',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lamb.component.html',
  styleUrl: './lamb.component.css'
})
export class LambComponent {
  menuObject:any={};

  ngOnInit(){
    this.getLambDescription();
  }
getLambDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
