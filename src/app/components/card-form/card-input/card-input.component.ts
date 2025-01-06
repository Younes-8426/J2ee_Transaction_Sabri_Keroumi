import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div [formGroup]="form">
      <div class="form-group">
        <label for="cardNumber">Card Number</label>
        <input
          id="cardNumber"
          type="text"
          formControlName="cardNumber"
          placeholder="1234 5678 9012 3456"
          maxlength="19"
        >
      </div>

      <div class="form-group">
        <label for="cardHolderName">Cardholder Name</label>
        <input
          id="cardHolderName"
          type="text"
          formControlName="cardHolderName"
          placeholder="test ahmed"
        >
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="expiryDate">Expiry Date</label>
          <input
            id="expiryDate"
            type="text"
            formControlName="expiryDate"
            placeholder="MM/YY"
            maxlength="5"
          >
        </div>

        <div class="form-group">
          <label for="cvv">CVV</label>
          <input
            id="cvv"
            type="password"
            formControlName="cvv"
            placeholder="123"
            maxlength="3"
          >
        </div>
      </div>
    </div>
  `,
  styles: [`
    .form-group {
      margin-bottom: 1rem;
    }

    .form-row {
      display: flex;
      gap: 1rem;
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
export class CardInputComponent {
  @Input() form!: FormGroup;
}