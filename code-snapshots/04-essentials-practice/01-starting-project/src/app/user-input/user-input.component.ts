import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Input() initialInvestment!: string;
  @Input() annualInvestment!: string;
  @Input() expectedReturn!: string;
  @Input() duration!: string;
  @Output() calculate = new EventEmitter<UserInput>();
}
