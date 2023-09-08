import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-required-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './required-input.component.html',
  styleUrls: ['./required-input.component.css']
})
export class RequiredInputComponent {
  @Input() articleId!: string; 
  @Input({ required: true }) user:any;
}
