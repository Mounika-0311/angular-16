import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-rxjs-ex',
  standalone: true,
  imports: [CommonModule],
   template: `{{ counter()}}`,
  styleUrls: ['./rxjs-ex.component.css']
})
export class RxjsExComponent {
  constructor() {}

  count = signal(0);
  count$ = toObservable(this.count);

  private destroyRef = inject(DestroyRef);
  subscription: any;
  ngOnInit() {
    this.subscription=interval(1000).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
    // console.log(this.subscription,'destroyed')


    this.count$.subscribe(() =>{
      console.log(this.count)
    });
  }

  counterObservable = interval(1000);
  // Get a `Signal` representing the counterObservable's value.
  counter = toSignal(this.counterObservable, {initialValue: 0});
  
  
}
