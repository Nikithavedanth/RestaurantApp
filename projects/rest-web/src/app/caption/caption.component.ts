import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-caption',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './caption.component.html',
  styleUrl: './caption.component.css'
})
export class CaptionComponent {

}
