import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-beef',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './beef.component.html',
  styleUrl: './beef.component.css'
})
export class BeefComponent {
  menuObject:any={};

  ngOnInit(){
    this.getBeefDescription();
  }
getBeefDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
