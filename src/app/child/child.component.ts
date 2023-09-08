import { CommonModule } from '@angular/common';
import { Component, DestroyRef, Input, inject, signal } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class ChildComponent {
  destroyRef = inject(DestroyRef);
  show: boolean =true;
  // constructor(){}
  // Required inputs feature
  // @Input({required: true}) name: string = '';
constructor(){
  this.destroyRef.onDestroy(()=>{console.log('destroyed')})
}
name = signal('jasica');
updateName(name : string){
  this.name.set(name);
}
toggle(event : any){
 this.show= !this.show;
}
}
