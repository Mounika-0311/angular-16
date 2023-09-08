import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase, CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import {provideClientHydration} from '@angular/platform-browser';
import { RxjsExComponent } from './rxjs-ex/rxjs-ex.component';
import { RequiredInputComponent } from './required-input/required-input.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [NgSwitch, NgSwitchDefault, NgSwitchCase, RouterOutlet,ChildComponent,CommonModule,RxjsExComponent,RequiredInputComponent]
})

export class AppComponent {
  title = 'Angular16features';
  name = 'mounika'
  show: boolean =true;
  User= {
    name: 'mounika',
    age: 22,
    birthday: '03/11/2001',
  };
  toggle(event : any){
    this.show= !this.show;
  }
   
}
