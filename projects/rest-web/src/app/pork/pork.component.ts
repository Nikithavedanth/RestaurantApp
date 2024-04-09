import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pork',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pork.component.html',
  styleUrl: './pork.component.css'
})
export class PorkComponent {
  menuObject:any={};

  ngOnInit(){
    this.getPorkDescription();
  }
getPorkDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
