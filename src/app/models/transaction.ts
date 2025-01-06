export interface Transaction {
  id?: number;
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
  cvv: string;
  amount: number;
  status?: 'PENDING' | 'COMPLETED' | 'FAILED';
  timestamp?: Date;
}