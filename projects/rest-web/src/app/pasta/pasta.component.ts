import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pasta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pasta.component.html',
  styleUrl: './pasta.component.css'
})
export class PastaComponent {
  menuObject:any={};

  ngOnInit(){
    this.getPastaDescription();
  }
getPastaDescription(){
  fetch('../../assets/meals.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
}
