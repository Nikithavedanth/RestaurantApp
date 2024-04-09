import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-side',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side.component.html',
  styleUrl: './side.component.css'
})
export class SideComponent {
  menuObject:any={};

  ngOnInit(){
    this.getSideDescription();
  }
getSideDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
