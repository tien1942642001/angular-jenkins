import { Component } from '@angular/core';

@Component({
  selector: 'app-feature1',
  standalone: true,
  imports: [],
  templateUrl: './feature1.component.html',
  styleUrl: './feature1.component.scss'
})
export class Feature1Component {
  feature: string = 'day la tinh nang moi';
}
