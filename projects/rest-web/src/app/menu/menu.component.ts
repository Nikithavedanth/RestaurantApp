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
  this.GetMenuObject();
}
GetMenuObject(){
  fetch('../../assets/mealsdb.json').then(response=>response.json()).then(data=>{
    this.menuObject=data
  })
}
GetMenuDescription(){
  
}
}
