import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tacos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tacos.component.html',
  styleUrl: './tacos.component.css'
})
export class TacosComponent {
  menuObject:any={};

  ngOnInit(){
    this.getTacosDescription();
  }
getTacosDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
