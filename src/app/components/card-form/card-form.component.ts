import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction';
import { CardInputComponent } from './card-input/card-input.component';
import { AmountInputComponent } from './amount-input/amount-input.component';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardInputComponent,
    AmountInputComponent
  ],
  template: `
    <div class="card-form-container">
      <h2>Process Payment</h2>
      <form [formGroup]="cardForm" (ngSubmit)="onSubmit()">
        <app-card-input [form]="cardForm"></app-card-input>
        <app-amount-input [form]="cardForm"></app-amount-input>
        <button type="submit" [disabled]="!cardForm.valid">
          Process Payment
        </button>
      </form>
    </div>
  `,
  styles: [`
    .card-form-container {
      max-width: 500px;
      margin: 2rem auto;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    button {
      width: 100%;
      padding: 0.75rem;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:disabled {
      background-color: #ccc;
    }
  `]
})
export class CardFormComponent {
  cardForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService
  ) {
    this.cardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      cardHolderName: ['', Validators.required],
      expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\\/([0-9]{2})$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      amount: ['', [Validators.required, Validators.min(0.01)]]
    });
  }

  onSubmit() {
    if (this.cardForm.valid) {
      const transaction: Transaction = this.cardForm.value;
      this.transactionService.processTransaction(transaction)
        .subscribe({
          next: (response) => {
            console.log('Transaction successful', response);
            this.cardForm.reset();
          },
          error: (error) => {
            console.error('Transaction failed', error);
          }
        });
    }
  }
}