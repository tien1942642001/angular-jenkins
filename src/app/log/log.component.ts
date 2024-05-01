import { Component } from '@angular/core';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [],
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss'
})
export class LogComponent {
  newMoto: string = 'nvx 155 vva';
  title: string = 'hello world';
  cars:any = [];

  public add(){
    this.cars.push('yamaha');
  }
  // this is staging area

  // git stash
  // commit A
}
