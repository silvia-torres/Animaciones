import { Component, Input } from '@angular/core';
import  data from './data';
import {trigger,style,transition,state,animate} from '@angular/animations';

@Component({
  selector: 'hello',
  templateUrl: 'hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
  animations:[
    trigger('enterState',[
      state('void',style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter',[
        animate(300,style({
          transform:'translateX(0)',
          opacity:1
          }))
        ])
    ])  
  ]
 
})
export class HelloComponent  {
  @Input() name: string;
  public courses: any[] = data;

  
}


  
