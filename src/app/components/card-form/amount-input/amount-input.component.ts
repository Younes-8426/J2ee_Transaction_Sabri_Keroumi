import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-amount-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="form-group" [formGroup]="form">
      <label for="amount">Amount</label>
      <input
        id="amount"
        type="number"
        formControlName="amount"
        placeholder="Enter amount"
      >
    </div>
  `,
  styles: [`
    .form-group {
      margin-bottom: 1rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  `]
})
export class AmountInputComponent {
  @Input() form!: FormGroup;
}