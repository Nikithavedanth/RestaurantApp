import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import axios from 'axios';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuObject:any = {};
  ngOnInit(){
    this.getMenuObject();
  }
  getMenuObject(){
    fetch('../../assets/categories.json').then(response=>response.json()).then(data=>{
      this.menuObject=data
    })
  }
// GetMenuDescription(){
  
// }
}
